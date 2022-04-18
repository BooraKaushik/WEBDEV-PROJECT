import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import AddAddress from "./Components/AddAddress";
import AddPayment from "./Components/AddPayment";
import Card from "./Components/HomePage/Card";
import LoginComponent from "./Components/LoginComponent";
import SignUpComponent from "./Components/SignUpComponent";
import Template from "./Components/Template";
import { isloggedinService } from "./Services/LoginService";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Template />}>
            {/* ROUTES MUST BE DECLARED IN THIS AS CHILDREN */}
            {/* <Route index element={<LoginComponent />}></Route> */}
            <Route index element={<Card />}></Route>
            <Route
              path="login/"
              element={
                isloggedinService() ? <Navigate to="/" /> : <LoginComponent />
              }
            ></Route>
            <Route
              path="signup/"
              element={
                isloggedinService() ? <Navigate to="/" /> : <SignUpComponent />
              }
            ></Route>
            <Route path="addaddress/" element={<AddAddress />}></Route>
            <Route path="addpayment/" element={<AddPayment />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
