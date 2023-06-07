import { PRICE } from "@/utils/types";
import { Schema, model, models } from "mongoose";
import Review from "./Review";

const BookingSchema = new Schema(
  {
    number_of_people: Number,
    booking_time: String,
    booker_email: String,
    booker_phone: String,
    booker_firstName: String,
    booker_lastName: String,
    booker_occassion: String,
    booker_request: String,
    restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  },
  { timestamps: true }
);
const Booking = models.Booking || model("Booking", BookingSchema);
export default Booking;
