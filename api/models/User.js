import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    adminRestaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    reservationHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reservation",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
