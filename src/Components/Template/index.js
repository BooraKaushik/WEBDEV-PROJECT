import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import Footer from "../Footer";
import NavBar from "../NavBar";
import LogInReducer from "../Reducers/LogInReducer";
import "./index.css";

const store = createStore(combineReducers({ LogIn: LogInReducer }));
const Template = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <div className="container wd-outlet">
        <Outlet />
      </div>
      <div className="container d-none d-sm-block">
        <Footer />
      </div>
    </Provider>
  );
};
export default Template;
