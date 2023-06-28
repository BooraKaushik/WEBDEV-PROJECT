import {
  addAddress,
  getUserInfo,
  RemoveAddress,
} from "../../../Services/AddAddress";

export const ADD_ADDRESS = "ADD_ADDRESS";

// The Following are the actions provided to access Address entity on backend.

/**
 * This function calls the Add Address Service to store data on Backend.
 * @param {Object} address attribute that needs to be added on the backend.
 * @returns status from backend.
 */
export const AddAddressAction = async (address) => {
  const info = await addAddress(address);
  return info;
};

/**
 * This function calls the revove Address Service to remove data on Backend.
 * @param {String} aid  Id of the object being removed.
 * @returns status from backend
 */
export const RemoveAddressAction = async (aid) => {
  const info = await RemoveAddress(aid);
  return info;
};

/**
 * This function calls the fetch Address Service to get data from Backend.
 * @param {Object} dispatch dispatch object to call the appropriate method.
 * @returns data from backend.
 */
export const getAddressAction = async (dispatch) => {
  const info = await getUserInfo();
  dispatch({
    type: ADD_ADDRESS,
    address: info.user.address,
  });
  return info.user.address;
};
