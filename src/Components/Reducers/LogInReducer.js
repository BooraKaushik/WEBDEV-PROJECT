import { LOGIN_USER } from "../Actions/Login";
import LogInData from "./TempData/LogInData";

const LogInReducer = (state = LogInData, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {};
    default:
      return state;
  }
};
export default LogInReducer;
