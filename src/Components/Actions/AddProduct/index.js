import {
  AddProduct,
  GetProducts,
  RemoveProduct,
} from "../../../Services/AddProduct";

export const ADD_PRODUCT = "ADD_PRODUCT";

export const AddProductAction = async (address) => {
  const info = await AddProduct(address);
  return info;
};
export const RemoveProductAction = async (aid) => {
  const info = await RemoveProduct(aid);
  return info;
};
export const getProductsAction = async () => {
  const info = await GetProducts();
  return info;
};
