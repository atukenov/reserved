import { PRICE } from "@/utils/types";
import { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    text: String,
    rating: Number,
    restaurant_id: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Review = models.Review || model("Review", ReviewSchema);
export default Review;
