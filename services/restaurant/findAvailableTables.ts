import { times } from "@/data";
import Booking from "@/models/Booking";
import Restaurant from "@/models/Restaurant";
import Table from "@/models/Table";
import { NextResponse } from "next/server";

export const findAvailableTables = async ({
  time,
  day,
  restaurant,
}: {
  time: string;
  day: string;
  restaurant: any;
}) => {
  const searchTimes = times.find((t) => {
    return t.time === time;
  })?.searchTimes;

  if (!searchTimes)
    return NextResponse.json(
      { errorMessage: "Invalid data provided" },
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

  return searchTimesWithTables;
};
