import { useDispatch } from "react-redux";
import { CloseContactUs } from "../Actions/ContactUs";
import "./index.css";

const ContactUs = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="wd-privacy">
      <div className="wd-privacy-content">
        <div>
          <h5>Mail us at:</h5>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Sai Sriker Reddy Vootukuri</span>&nbsp;
            <a href="mailto:vootukuri.s@northeastern.edu">
              (vootukuri.s@northeastern.edu)
            </a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Abhishek Kumar</span>&nbsp;
            <a href="mailto:kumar.abhis@northeastern.edu">
              (kumar.abhis@northeastern.edu)
            </a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Rahul Reddy Baddam</span>&nbsp;
            <a href="mailto:baddam.ra@northeastern.edu">
              (baddam.ra@northeastern.edu)
            </a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Kaushik Boora</span>&nbsp;
            <a href="mailto:boora.k@northeastern.edu">
              (boora.k@northeastern.edu)
            </a>
          </p>
          <br></br>

          <h5>Contact us at:</h5>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Sai Sriker Reddy Vootukuri</span>&nbsp;
            <a href="tel:+19714176064">(+19714176064)</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Abhishek Kumar</span>&nbsp;
            <a href="tel:+18574925747">(+18574925747)</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Rahul Reddy Baddam</span>&nbsp;
            <a href="tel:+18572654080">(+18572654080)</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Kaushik Boora</span>&nbsp;
            <a href="tel:+18572305227">(+18572305227)</a>
          </p>
        </div>
        <i
          className="fa fa-times position-absolute top-0 end-0 p-3"
          aria-hidden="true"
          onClick={() => CloseContactUs(dispatch)}
        ></i>
      </div>
    </div>
  );
};

export default ContactUs;
