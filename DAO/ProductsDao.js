import ProductsModel from "../Models/ProductsModel.js";

export const findAllProductPdao = () => ProductsModel.find({});
export const findOneProductPdao = (id) =>
  ProductsModel.findOne({ _id: id }).populate("likes").exec();
export const createProductPdao = (id) => {
  ProductsModel.create(id);
};
export const deleteProductPdao = (id) => {
  ProductsModel.deleteOne({ _id: id });
};

export const updateLikePdao = (aid, lid) =>
  ProductsModel.updateOne({ _id: aid }, { $push: { likes: lid } });
export const removeLikePdao = (aid, lid) =>
  ProductsModel.updateOne({ _id: aid }, { $pull: { likes: lid } });

export const updateReviewPdao = (aid, rid) =>
  ProductsModel.updateOne({ _id: aid }, { $push: { reviews: rid } });
export const removeReviewPdao = (aid, rid) =>
  ProductsModel.updateOne({ _id: aid }, { $pull: { reviews: rid } });
