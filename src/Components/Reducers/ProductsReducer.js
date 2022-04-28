import { ADD_PRODUCT } from "../Actions/AddProduct";

const AddProductReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return action.product;
    default:
      return state;
  }
};
export default AddProductReducer;
