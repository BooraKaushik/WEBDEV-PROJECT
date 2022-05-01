import {
  AddProduct,
  GetOneProduct,
  GetProducts,
  RemoveProduct,
  GetProductsByName
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
export const getProductAction = async (id) => {
  const info = await GetOneProduct(id);
  return info;
};

export const getProductsAction = async () => {
  const info = await GetProducts();
  return info;
};
export const getProductsByNameAction = async (pname) => {
  const info = await GetProductsByName(pname);
  console.log("Action data");
  console.log(info);
  return info;
};

