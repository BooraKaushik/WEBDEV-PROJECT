import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: String, required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Likes", default: [] }],
  reviews: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Reviews", default: [] },
  ],
});

export default mongoose.model("Prods", schema);
