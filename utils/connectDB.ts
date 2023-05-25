import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("CONNECTING TO MONGO.");
    await mongoose.connect(process.env.DATABASE_URL!);
    console.log("CONNECTED TO MONGO.");
  } catch (error) {
    console.log(error);
  }
};
