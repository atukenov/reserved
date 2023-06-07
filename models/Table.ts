import { PRICE } from "@/utils/types";
import { Schema, model, models } from "mongoose";
import Review from "./Review";

const TableSchema = new Schema(
  {
    seats: Number,
    restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  },
  { timestamps: true }
);
const Table = models.Table || model("Table", TableSchema);
export default Table;
