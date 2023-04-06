import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    tableId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
      required: true,
    },
    reservationDate: {
      type: Date,
      default: Date.now,
    },
    partySize: {
      type: Number,
      default: 1,
      min: 1,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", ReservationSchema);
