import mongoose, { Model } from "mongoose";

const { DATABASE_URL } = process.env;

export const connectDB = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch((err) => console.log(err));
  console.log("👍 Connected to MongoDB.");
};
