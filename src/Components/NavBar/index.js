import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
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
                to="#"
              >
                SignIn
              </Link>
            </li>

            <li className="nav-item active mx-3">
              <Link
                className="nav-link"
                style={{ color: "rgba(255, 255, 255, 0.932)" }}
                to="#"
              >
                <strong> LogOut</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
