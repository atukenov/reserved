import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import { connectDB } from "@/utils/connectDB";

import { times } from "@/data";

connectDB();

export const GET = async (req: NextRequest, { params }: any) => {
  const { slug } = params;
  const day = req.nextUrl.searchParams.get("day");
  const time = req.nextUrl.searchParams.get("time");
  const partySize = req.nextUrl.searchParams.get("partySize");

  if (!day || !time || !partySize)
    return NextResponse.json(
      { errorMessage: "Invalid data provided" },
      { status: 400 }
    );

  const searchTimes = times.find((t) => {
    return t.time === time;
  })?.searchTimes;

  if (!searchTimes)
    return NextResponse.json(
      { errorMessage: "Invalid data provided" },
      { status: 400 }
    );

  return NextResponse.json(searchTimes);
};
