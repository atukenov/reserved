import { Schema, model, models } from "mongoose";

const LocationSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const Location = models.Location || model("Location", LocationSchema);
export default Location;
