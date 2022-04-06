import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import Footer from "../Footer";
import NavBar from "../NavBar";
import LogInReducer from "../Reducers/LogInReducer";

const store = createStore(combineReducers({ LogIn: LogInReducer }));
const Template = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Outlet />
      <Footer />
    </Provider>
  );
};
export default Template;
