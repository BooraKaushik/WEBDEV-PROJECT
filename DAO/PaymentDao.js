import PaymentDetailsModel from "../Models/PaymentDetailsModel.js";
export const findAllPaymentsPdao = () => PaymentDetailsModel.find();
export const createPaymentsPdao = (payment) =>
  PaymentDetailsModel.create(payment);
export const deletePaymentsPdao = (pid) =>
  PaymentDetailsModel.deleteOne({ _id: pid });
export const updatePaymentsPdao = (pid, payment) =>
  PaymentDetailsModel.updateOne({ _id: pid }, { $set: payment });

export const updateUserPdao = (pid, uid) =>
  PaymentDetailsModel.updateOne({ _id: pid }, { $push: { users: uid } });
export const removeUserPdao = (pid, uid) =>
  PaymentDetailsModel.updateOne({ _id: pid }, { $pull: { users: uid } });
