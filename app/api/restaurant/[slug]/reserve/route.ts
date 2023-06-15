import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import { connectDB } from "@/utils/connectDB";

import { times } from "@/data";
import Booking from "@/models/Booking";
import Restaurant from "@/models/Restaurant";
import Table from "@/models/Table";
import { RestaurantType } from "@/utils/types";
import { findAvailableTables } from "@/services/restaurant/findAvailableTables";

export const POST = async (req: NextRequest, { params }: any) => {
  await connectDB();
  const { slug } = params;
  const day = req.nextUrl.searchParams.get("day");
  const time = req.nextUrl.searchParams.get("time");
  const partySize = req.nextUrl.searchParams.get("partySize");
  const {
    booker_email,
    booker_phone,
    booker_firstName,
    booker_lastName,
    booker_occasion,
    booker_request,
  } = await req.json();

  if (!day || !time || !partySize)
    return NextResponse.json(
      { errorMessage: "Invalid data provided 1" },
      { status: 400 }
    );

  const restaurant = await Restaurant.findOne({ slug })
    .select("tables open_time close_time bookings")
    .populate([
      { path: "tables", model: Table },
      { path: "bookings", model: Booking },
    ]);

  if (!restaurant)
    return NextResponse.json(
      { errorMessage: "Restaurant not found" },
      { status: 400 }
    );

  if (
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
  )
    return NextResponse.json(
      { errorMessage: "Restaurant is not open at that time" },
      { status: 400 }
    );

  const res = await findAvailableTables({ day, time, restaurant });

  if (res instanceof NextResponse) return res.json();

  const searchTimesWithTables = res;

  const searchTimeWithTables = searchTimesWithTables.find((t) => {
    return t.date.toISOString() === new Date(`${day}T${time}`).toISOString();
  });

  if (!searchTimeWithTables)
    return NextResponse.json(
      { errorMessage: "No availability, cannot book" },
      { status: 400 }
    );

  const tablesCount: {
    2: number[];
    4: number[];
  } = {
    2: [],
    4: [],
  };

  searchTimeWithTables.tables.forEach((table: any) => {
    if (table.seats === 2) tablesCount[2].push(table._id);
    else tablesCount[4].push(table._id);
  });

  const tablesToBook: number[] = [];
  let seatsRemaining = parseInt(partySize);
  while (seatsRemaining > 0) {
    if (seatsRemaining >= 3) {
      if (tablesCount[4].length) {
        tablesToBook.push(tablesCount[4][0]);
        tablesCount[4].shift();
        seatsRemaining -= 4;
      } else {
        tablesToBook.push(tablesCount[2][0]);
        tablesCount[2].shift();
        seatsRemaining -= 2;
      }
    } else {
      if (tablesCount[2].length) {
        tablesToBook.push(tablesCount[2][0]);
        tablesCount[2].shift();
        seatsRemaining -= 2;
      } else {
        tablesToBook.push(tablesCount[4][0]);
        tablesCount[4].shift();
        seatsRemaining -= 4;
      }
    }
  }

  const newBooking = new Booking({
    number_of_people: parseInt(partySize),
    booking_time: new Date(`${day}T${time}`),
    booker_email: booker_email,
    booker_phone: booker_phone,
    booker_firstName: booker_firstName,
    booker_lastName: booker_lastName,
    booker_occasion: booker_occasion,
    booker_request: booker_request,
    restaurant: restaurant._id,
    tables: [...tablesToBook],
  });

  tablesToBook.forEach(async (tableId) => {
    const table = await Table.findById(tableId);
    console.log(tableId);
    table.bookings.push(newBooking._id);
    await table.save();
  });

  restaurant.bookings.push(newBooking._id);

  await newBooking.save();
  await restaurant.save();

  return NextResponse.json(newBooking);
};
