import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    tableId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
      // required: true,
    },
    reservationDate: {
      type: Date,
      default: Date.now,
    },
    reservationTime: {
      type: String,
      required: true,
    },
    partySize: {
      type: Number,
      default: 1,
      min: 1,
    },
    specialRequest: {
      type: String,
    },
    status: {
      type: String,
      enum: ["confirmed", "pending", "cancelled"],
      default: "pending",
    },
    guest: {
      name: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", ReservationSchema);
