import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import { connectDB } from "@/utils/connectDB";

import { times } from "@/data";
import Booking from "@/models/Booking";
import Restaurant from "@/models/Restaurant";
import Table from "@/models/Table";
import { findAvailableTables } from "@/services/restaurant/findAvailableTables";

connectDB();

export const GET = async (req: NextRequest, { params }: any) => {
  const { slug } = params;
  const day = req.nextUrl.searchParams.get("day");
  const time = req.nextUrl.searchParams.get("time");
  const partySize = req.nextUrl.searchParams.get("partySize");

  if (!day || !time || !partySize)
    return NextResponse.json(
      { errorMessage: "Invalid data provided 1" },
      { status: 400 }
    );

  const restaurant = await Restaurant.findOne({ slug })
    .select("tables open_time close_time")
    .populate({ path: "tables", model: Table });

  if (!restaurant)
    return NextResponse.json(
      { errorMessage: "Invalid data provided" },
      { status: 400 }
    );

  const res = await findAvailableTables({ day, time, restaurant });

  if (res instanceof NextResponse) return res.json();

  const searchTimesWithTables = res;

  const availabilities = searchTimesWithTables
    .map((t) => {
      const sumSeats = t.tables.reduce((sum: number, table: any) => {
        return sum + table.seats;
      }, 0);
      return {
        time: t.time,
        available: sumSeats >= parseInt(partySize),
      };
    })
    .filter((availability) => {
      const timeIsAfterOpeningHour =
        new Date(`${day}T${availability.time}`) >=
        new Date(`${day}T${restaurant.open_time}`);
      const timeIsBeforeClosingHour =
        new Date(`${day}T${availability.time}`) <=
        new Date(`${day}T${restaurant.close_time}`);
      return timeIsAfterOpeningHour && timeIsBeforeClosingHour;
    });

  return NextResponse.json(availabilities);
};
