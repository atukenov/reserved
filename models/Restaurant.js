import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactDetails: {
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  hoursOfOperation: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  menu: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MenuItem",
    },
  ],
  tableCapacity: {
    type: Number,
    required: true,
  },
  tags: [{ type: String }],
  images: [
    {
      url: { type: String, required: true },
      alt: { type: String },
    },
  ],
});

export default mongoose.model("Restaurant", RestaurantSchema);
