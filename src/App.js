import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddAddress from "./Components/AddAddress";
import AddPayment from "./Components/AddPayment";
import Card from "./Components/HomePage/CardItem";
import LoginComponent from "./Components/LoginComponent";
import SignUpComponent from "./Components/SignUpComponent";
import Template from "./Components/Template";
import Search from "./Components/Search";
import Details from "./Components/Search/details";
import LogedIn from "./Components/LogedIn";
import PrivacyReading from "./Components/PrivacyReading";
import Profile from "./Components/Profile";
import UserInformation from "./Components/userInformation";
import UpdateUserInformation from "./Components/UpdateUserInformation";

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
              path="/privacy"
              exact={true}
              element={<PrivacyReading />}
            ></Route>

            <Route path="/profile" element={<Profile />}>
              <Route index exact={true} element={<UserInformation />}></Route>
              <Route
                path="/profile/addaddress"
                exact={true}
                element={<AddAddress />}
              ></Route>
              <Route
                path="/profile/addpayment"
                exact={true}
                element={<AddPayment />}
              ></Route>
              <Route
                  path="/profile/editUserInformation"
                  exact={true}
                  element={<UpdateUserInformation/>}
              ></Route>
            </Route>

            <Route path="/search" exact={true} element={<Search />} />
            <Route
              path="/search/:productName"
              exact={true}
              element={<Search />}
            />

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
