import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import { connectDB } from "@/utils/connectDB";

import { times } from "@/data";
import Booking from "@/models/Booking";
import Restaurant from "@/models/Restaurant";

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

  const searchTimes = times.find((t) => {
    return t.time === time;
  })?.searchTimes;

  if (!searchTimes)
    return NextResponse.json(
      { errorMessage: "Invalid data provided 2" },
      { status: 400 }
    );

  const bookings = await Booking.find({
    booking_time: {
      $gte: new Date(`${day}T${searchTimes[0]}`),
      $lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
    },
  })
    .select("number_of_people booking_time tables")
    .populate("tables");

  const bookingTablesObj: {
    [key: string]: { [key: number]: true };
  } = {};

  bookings.forEach((booking) => {
    bookingTablesObj[booking.booking_time.toISOString()] =
      booking.tables.reduce((obj: any, table: any) => {
        return {
          ...obj,
          [table._id]: true,
        };
      }, {});
  });

  const restaurant = await Restaurant.findOne({ slug })
    .select("tables open_time close_time")
    .populate("tables");

  if (!restaurant)
    return NextResponse.json(
      { errorMessage: "Invalid data provided 2" },
      { status: 400 }
    );

  const tables = restaurant.tables;
  const searchTimesWithTables = searchTimes.map((searchTime) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      time: searchTime,
      tables,
    };
  });

  searchTimesWithTables.forEach((t) => {
    t.tables = t.tables.filter((table: any) => {
      if (bookingTablesObj[t.date.toISOString()]) {
        if (bookingTablesObj[t.date.toISOString()][table._id]) return false;
      }
      return true;
    });
  });

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

  return NextResponse.json({
    availabilities,
  });
};
