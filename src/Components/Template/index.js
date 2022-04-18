import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import Footer from "../Footer";
import NavBar from "../NavBar";
import AddAddressReducer from "../Reducers/AddAddressReducer";
import AddPaymentReducer from "../Reducers/AddPaymentReducer";
import LogInReducer from "../Reducers/LogInReducer";
import "./index.css";

const store = createStore(
  combineReducers({
    LogIn: LogInReducer,
    AddAddress: AddAddressReducer,
    AddPayment: AddPaymentReducer,
  })
);
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
