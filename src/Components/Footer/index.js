import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="row row-cols-5 py-5 my-5 border-top">
      <div className="col">
        <Link
          to="/"
          className="d-flex justify-content-center align-items-center mb-3 link-dark text-decoration-none"
        >
          SARK
        </Link>
      </div>
      <div className="col"></div>
      <div className="col">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-muted">
              About
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-muted">
              FAQ
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-muted">
              Features
            </Link>
          </li>
        </ul>
      </div>
      <div className="col">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-muted">
              About
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-muted">
              FAQ
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-muted">
              Features
            </Link>
          </li>
        </ul>
      </div>
      <div className="col">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-muted">
              About
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-muted">
              FAQ
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-muted">
              Features
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
