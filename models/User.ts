import { PRICE } from "@/utils/types";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    city: String,
    password: String,
    email: { type: String, unique: true },
    phone: String,
  },
  { timestamps: true }
);
const User = models.User || model("User", UserSchema);
export default User;
