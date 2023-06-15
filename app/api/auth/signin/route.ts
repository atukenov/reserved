import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

import { connectDB } from "../../../../utils/connectDB";
import User from "@/models/User";
import { UserType } from "@/utils/types";

export const GET = async () => {
  return NextResponse.json({ data: "Get User api" });
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  await connectDB();

  const { email, password } = await req.json();

  const errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is invalid",
    },
    {
      valid: validator.isLength(password, {
        min: 1,
      }),
      errorMessage: "Password is invalid",
    },
  ];

  validationSchema.forEach((check) => {
    if (!check.valid) {
      errors.push(check.errorMessage);
    }
  });
  if (errors.length) {
    return NextResponse.json({ errorMessage: errors[0] }, { status: 400 });
  }

  const user: UserType | null = await User.findOne({ email });

  if (!user)
    return NextResponse.json(
      { errorMessage: "Email or password is invalid" },
      { status: 401 }
    );

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return NextResponse.json(
      { errorMessage: "Email or password is invalid" },
      { status: 401 }
    );

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({ email: user.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  setCookie("jwt", token, { maxAge: 60 * 6 * 24 });

  return NextResponse.json({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    city: user.city,
  });
};
