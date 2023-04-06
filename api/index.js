import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import restaurantsRoute from "./routes/restaurants.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/rooms", roomsRoute);
app.use("/api/restaurant", restaurantsRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong!";
  return res.status(err.status).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

app.listen(8080, () => {
  connect();
  console.log("🧩 Connected to server!");
});
