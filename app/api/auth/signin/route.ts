import { NextResponse } from "next/server";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { connectDB } from "../../../../utils/connectDB";
import User from "@/models/User";

connectDB();

export const GET = async () => {
  return NextResponse.json({ data: "Get User api" });
};

export const POST = async (req: Request) => {
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

  const userWithEmail = await User.findOne({ email });

  if (!userWithEmail)
    return NextResponse.json(
      { errorMessage: "Email or password is invalid" },
      { status: 401 }
    );

  const isMatch = await bcrypt.compare(password, userWithEmail.password);

  if (!isMatch)
    return NextResponse.json(
      { errorMessage: "Email or password is invalid" },
      { status: 401 }
    );

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({ email: userWithEmail.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  return NextResponse.json({ token });
};
