import mongoose from "mongoose";

const times = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "00:00",
];

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
  tables: [
    {
      tableNumber: {
        type: String,
      },
      times: {
        type: [String],
        default: times,
      },
    },
  ],
});

export default mongoose.model("Restaurant", RestaurantSchema);
