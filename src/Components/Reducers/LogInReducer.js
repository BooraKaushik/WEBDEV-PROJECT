import { LOGIN_USER } from "../Actions/Login";

const LogInReducer = (state = { logedIn: false, user: {} }, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { logedIn: true, user: action.loginInfo };
    default:
      return state;
  }
};
export default LogInReducer;
