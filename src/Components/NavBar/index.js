import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { isloggedinService, logOutService } from "../../Services/LoginService";
import { logoutAction } from "../Actions/Login";

const NavBar = () => {
  const login = useSelector((state) => state.LogIn);
  const dispatch = useDispatch();
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark"
      style={{ backgroundColor: "#2874f0" }}
    >
      <div className="container">
        <span
          className="navbar-brand mx-1 mx-md-3 mb-0 h1"
          style={{ color: "rgba(255, 255, 255, 0.932)" }}
        >
          SARK
        </span>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse ml-auto"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav" style={{ margin: "0px 0px 0px auto" }}>
            <li className="nav-item active mx-3">
              <Link
                className="nav-link"
                style={{ color: "rgba(255, 255, 255, 0.932)" }}
                to="home/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item active mx-3">
              <Link
                className="nav-link"
                style={{ color: "rgba(255, 255, 255, 0.932)" }}
                to="home/"
              >
                Search
              </Link>
            </li>
            {login.logedIn ? (
              <li className="nav-item active mx-3">
                <Link
                  className="nav-link"
                  style={{ color: "rgba(255, 255, 255, 0.932)" }}
                  onClick={async () => {
                    await logoutAction(dispatch);
                  }}
                  to="#"
                >
                  <strong> LogOut</strong>
                </Link>
              </li>
            ) : (
              <li className="nav-item active mx-3">
                <Link
                  className="nav-link"
                  style={{ color: "rgba(255, 255, 255, 0.932)" }}
                  to="login/"
                >
                  <strong> LogIn</strong>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
