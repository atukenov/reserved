import mongoose from "mongoose";

const TableSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  tableNumber: {
    type: String,
    required: true,
  },
  seatingCapacity: {
    type: Number,
    required: true,
  },
  availabilityStatus: {
    type: String,
    enum: ["reserved", "available"],
    default: "available",
  },
  location: {
    type: String,
  },
});

export default mongoose.model("Table", TableSchema);
