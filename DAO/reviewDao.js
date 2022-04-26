import ReviewsModel from "../Models/ReviewsModel.js";
export const findAllReviewsRdao = () => ReviewsModel.find();
export const findOneAddressAdao = (userId, productId) =>
  AddressModel.findOne({ user: userId, product: productId });
export const createAddressAdao = (address) => AddressModel.create(address);
export const deleteAddressAdao = (aid) => AddressModel.deleteOne({ _id: aid });
export const updateAddressAdao = (aid, address) =>
  AddressModel.updateOne({ _id: aid }, { $set: address });

export const updateUserAdao = (aid, uid) =>
  AddressModel.updateOne({ _id: aid }, { $push: { users: uid } });
export const removeUserAdao = (aid, uid) =>
  AddressModel.updateOne({ _id: aid }, { $pull: { users: uid } });
