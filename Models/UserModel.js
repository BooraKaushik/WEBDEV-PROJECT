import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";
const schema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Addresses", default: [] },
  ],
  cart: [{ type: mongoose.Schema.Types.ObjectId, default: [] }],
  paymentInfo: [{ type: mongoose.Schema.Types.ObjectId, default: [] }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, default: [] }],
  phone: { type: String, required: true },
  type: { type: String, required: true },
});
export default mongoose.model("Users", schema);
