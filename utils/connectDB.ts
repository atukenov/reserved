import mongoose, { Model } from "mongoose";

const { DATABASE_URL } = process.env;

const connectDB = async () => {
  mongoose.connect(DATABASE_URL as string).catch((err) => console.log(err));
  console.log("👍 Connected to MongoDB.");
};

export default connectDB;
