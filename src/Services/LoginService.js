import axios from "axios";

const API_URL = process.env.REACT_APP_API_SARK || "http://localhost:4300/api";

const LOGIN_URL = `${API_URL}/login`;

export const loginService = async (login) => {
  const loginInfo = await axios.post(LOGIN_URL, login);
  if (loginInfo.data.success) {
    localStorage.setItem("LoggedIn", JSON.stringify(loginInfo.data.userData));
    localStorage.setItem("LoginToken", `Brearer ${loginInfo.data.token}`);
  }
  return loginInfo.data;
};
export const isloggedinService = () => {
  if (localStorage.getItem("LoginToken")) return true;
  else return false;
};
