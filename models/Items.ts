import { Schema, model, models } from "mongoose";

const ItemSchema = new Schema(
  {
    name: String,
    price: String,
    description: String,
    restaurant_id: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  },
  { timestamps: true }
);

const Item = models.Item || model("Item", ItemSchema);
export default Item;
