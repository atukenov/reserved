import { PRICE } from "@/utils/types";
import { Schema, model, models } from "mongoose";

const RestaurantSchema = new Schema(
  {
    name: String,
    main_image: { type: String },
    images: [String],
    description: String,
    open_time: String,
    close_time: String,
    slug: { type: String, unique: true },
    price: { type: String, enum: PRICE },
    items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    location_id: { type: Schema.Types.ObjectId, ref: "Location" },
    cuisine_id: { type: Schema.Types.ObjectId, ref: "Cuisine" },
  },
  { timestamps: true }
);

const Restaurant = models.Restaurant || model("Restaurant", RestaurantSchema);
export default Restaurant;
