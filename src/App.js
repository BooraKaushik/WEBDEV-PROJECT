import { Link, Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./Components/HomePage/Card";
import LoginComponent from "./Components/LoginComponent";
import SignUpComponent from "./Components/SignUpComponent";
import Template from "./Components/Template";
import { isloggedinService } from "./Services/LoginService";
// import './vendors/bootstrap/css/bootstrap.min.css';
// // import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';
import Search from "./Components/Search";
import Details from "./Components/Search/details";


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
            <Route path="signup/" element={<SignUpComponent />}></Route>

            <Route path="/search"
                 element={<Search/>}/>
              <Route path="/details/:product_id"
                     element={<Details/>}/>
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
