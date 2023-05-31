import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("💤💤💤 Connecting...");
    await mongoose.connect(process.env.DATABASE_URL!);
    console.log("🆗🆗🆗 Connected.");
  } catch (error) {
    console.log(error);
  }
};
