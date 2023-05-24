import { Schema, model, models } from "mongoose";

const CuisineSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const Cuisine = models.Cuisine || model("Cuisine", CuisineSchema);
export default Cuisine;
