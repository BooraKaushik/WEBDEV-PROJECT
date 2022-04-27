import mongoose from "mongoose";

const schema = mongoose.Schema({
  users: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  product: { type: mongoose.Schema.Types.ObjectId },
});
export default mongoose.model("Likes", schema);
