import { getUserInfo } from "../../../Services/AddAddress";
import { addPayment, RemovePayment } from "../../../Services/AddPayment";

export const ADD_PAYMENT = "ADD_PAYMENT";

// The Following are the actions provided to access Payments entity on backend.

/**
 * This Action provides the User 
 * @param {Object} payment  Payment Info of User.
 * @returns Status from the backend.
 */
export const AddPaymentAction = async (payment) => {
  const info = await addPayment(payment);
  return info;
};
export const RemovePaymentAction = async (pid) => {
  const info = await RemovePayment(pid);
  return info;
};
export const getPaymentAction = async (dispatch) => {
  const info = await getUserInfo();
  dispatch({
    type: ADD_PAYMENT,
    paymentInfo: info.user.paymentInfo,
  });
  return info.user.paymentInfo;
};
