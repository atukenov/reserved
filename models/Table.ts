import { PRICE } from "@/utils/types";
import { Schema, model, models } from "mongoose";
import Review from "./Review";

const TableSchema = new Schema(
  {
    seats: Number,
    restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
  },
  { timestamps: true }
);
const Table = models.Table || model("Table", TableSchema);
export default Table;
