// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

type Data = {
  message: string;
};

export const GET = async () => {
  return NextResponse.json("hello");
};
