import { useDispatch } from "react-redux";
import { ClosePrivacyPolicy } from "../Actions/PrivacyPolicy";
import "./index.css";

const PrivacyPolicy = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="wd-privacy">
      <div className="wd-privacy-content">
        <div>
          This is privacy policy page for SARK and you have to agree to terms
          and conditions to proceed further
        </div>
        <i
          className="fa fa-times position-absolute top-0 end-0 p-3"
          aria-hidden="true"
          onClick={() => ClosePrivacyPolicy(dispatch)}
        ></i>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
