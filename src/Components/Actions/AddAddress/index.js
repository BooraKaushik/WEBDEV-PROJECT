import {
  addAddress,
  getUserInfo,
  RemoveAddress,
} from "../../../Services/AddAddress";

export const ADD_ADDRESS = "ADD_ADDRESS";

// The Following are the actions provided for Adding and Address.

// This function calls the Add Address Service to store data on Backend.
export const AddAddressAction = async (address) => {
  const info = await addAddress(address);
  return info;
};

// This function calls the revove Address Service to remove data on Backend.
export const RemoveAddressAction = async (aid) => {
  const info = await RemoveAddress(aid);
  return info;
};

// This function calls the fetch Address Service to get data from Backend.
export const getAddressAction = async (dispatch) => {
  const info = await getUserInfo();
  dispatch({
    type: ADD_ADDRESS,
    address: info.user.address,
  });
  return info.user.address;
};
