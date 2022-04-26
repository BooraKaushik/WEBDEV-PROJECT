import ReviewsModel from "../Models/ReviewsModel.js";
export const findAllReviewsRdao = () => ReviewsModel.find();
export const findOneReviewsRdao = (userId, productId) =>
  ReviewsModel.findOne({ user: userId, product: productId });
export const CreateReviewRdao = (review) => ReviewsModel.create(review);
export const deleteLikeRdao = (rid) => ReviewsModel.deleteOne({ _id: aid });
