import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import Footer from "../Footer";
import NavBar from "../NavBar";

const store = createStore(combineReducers());
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
