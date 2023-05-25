// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Location from "@/models/Location";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

type Data = {
  message: string;
};

export const GET = async () => {
  await connectDB();
  const locations = await Location.find();
  return NextResponse.json(locations);
};
