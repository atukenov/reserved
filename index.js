import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import usersRoute from "./routes/users.js";
import tablesRoute from "./routes/tables.js";
import restaurantsRoute from "./routes/restaurants.js";
import cors from "cors";

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
app.use(cors());

app.use("/api/tables", tablesRoute);
app.use("/api/restaurants", restaurantsRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong!";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  connect();
  console.log("🧩 Connected to server!");
});
