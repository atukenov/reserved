import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import * as jose from "jose";

import { connectDB } from "./utils/connectDB";

import User from "@/models/User";

connectDB();

export const middleware = async (req: NextRequest, res: NextResponse) => {
  const bearerToken = req.headers.get("authorization");

  if (!bearerToken) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request" }),
      { status: 401 }
    );
  }

  const token = bearerToken.split(" ")[1];

  if (!token) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request" }),
      { status: 401 }
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request" }),
      { status: 401 }
    );
  }
};

export const config = {
  matcher: ["/api/auth/me"],
};
