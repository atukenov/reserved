import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as jose from "jose";
import { connectDB } from "../../../../utils/connectDB";
import User from "@/models/User";

export const GET = async (req: NextRequest) => {
  await connectDB();
  const bearerToken = req.headers.get("authorization") as string;

  const token = bearerToken.split(" ")[1];

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return NextResponse.json(
      { errorMessage: "Unauthorized request" },
      { status: 401 }
    );
  }

  const user = await User.findOne({ email: payload.email }).select("-password");

  return NextResponse.json(user);
};
