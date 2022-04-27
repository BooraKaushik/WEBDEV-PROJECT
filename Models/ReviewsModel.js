import mongoose from "mongoose";

const schema = mongoose.Schema({
  review: { type: String, default: "" },
  rating: { type: Number, required: true, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
});
export default mongoose.model("Reviews", schema);
