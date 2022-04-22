import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddAddress from "./Components/AddAddress";
import AddPayment from "./Components/AddPayment";
import Card from "./Components/HomePage/Card";
import LoginComponent from "./Components/LoginComponent";
import SignUpComponent from "./Components/SignUpComponent";
import Template from "./Components/Template";
import Search from "./Components/Search";
import Details from "./Components/Search/details";
import LogedIn from "./Components/LogedIn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact={true} element={<Template />}>
            {/* ROUTES MUST BE DECLARED IN THIS AS CHILDREN */}
            {/* <Route index element={<LoginComponent />}></Route> */}

            <Route
              path="/login"
              exact={true}
              element={
                <LogedIn>
                  <LoginComponent />
                </LogedIn>
              }
            ></Route>
            <Route
              path="/register"
              exact={true}
              element={
                <LogedIn>
                  <SignUpComponent />
                </LogedIn>
              }
            ></Route>
            <Route
              path="/addaddress"
              exact={true}
              element={<AddAddress />}
            ></Route>
            <Route
              path="/addpayment"
              exact={true}
              element={<AddPayment />}
            ></Route>

            <Route path="/search" exact={true} element={<Search />} />
            <Route
              path="/details/:product_id"
              exact={true}
              element={<Details />}
            />
            <Route index element={<Card />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
