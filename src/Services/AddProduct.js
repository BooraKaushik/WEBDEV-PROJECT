import axios from "axios";

const API_URL = process.env.REACT_APP_API_SARK || "http://localhost:4300/api";

const ADD_PRODUCT_URL = `${API_URL}/add-product`;
const REMOVE_PRODUCT_URL = `${API_URL}/remove-product`;
const GET_PRODUCTS_URL = `${API_URL}/products`;

export const AddProduct = async (product) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.post(
    ADD_PRODUCT_URL,
    {
      uid: loginInfo._id,
      product,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  console.log(data.data);
  return data.data.error.length > 0;
};
export const RemoveProduct = async (pid) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.put(
    REMOVE_PRODUCT_URL,
    {
      uid: loginInfo._id,
      pid,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data.error.length > 0;
};

export const GetProducts = async () => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.put(
    GET_PRODUCTS_URL,
    {
      uid: loginInfo._id,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  console.log(data.data);
  return data.data.products;
};
