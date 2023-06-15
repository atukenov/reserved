import { NextResponse } from "next/server";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { connectDB } from "../../../../utils/connectDB";
import User from "@/models/User";
import { cookies } from "next/headers";
import { setCookie } from "cookies-next";

export const GET = async () => {
  return NextResponse.json({ data: "Get User api" });
};
export const POST = async (req: Request) => {
  await connectDB();
  const { firstName, lastName, email, city, password, phone } =
    await req.json();

  const errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isLength(firstName, {
        min: 1,
        max: 20,
      }),
      errorMessage: "First name is invalid",
    },
    {
      valid: validator.isLength(lastName, {
        min: 1,
        max: 20,
      }),
      errorMessage: "Last name is invalid",
    },
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is invalid",
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "Phone number is invalid",
    },
    {
      valid: validator.isLength(city, {
        min: 1,
        max: 20,
      }),
      errorMessage: "City is invalid",
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: "Password is not strong enough",
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

  if (userWithEmail)
    return NextResponse.json(
      { errorMessage: "Email is associated with another account" },
      { status: 400 }
    );

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    city: city,
    phone: phone,
    password: hashedPassword,
  });

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({ email: newUser.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  setCookie("jwt", token, { maxAge: 60 * 6 * 24 });

  await newUser.save();

  return NextResponse.json({
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
    phone: newUser.phone,
    city: newUser.city,
  });
};
