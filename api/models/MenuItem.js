import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    ingredients: {
      type: [String],
      min: 3,
      max: 10,
    },
    image: {
      url: { type: String, required: true },
      alt: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("MenuItem", MenuItemSchema);
