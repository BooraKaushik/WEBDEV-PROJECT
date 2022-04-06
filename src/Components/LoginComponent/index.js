import "./login.css";

const LoginComponent = () => {
  return (
    <div className="position-relative mx-auto my-5 p-5 wd-login-container">
      <div className="wd-form-login-text">
        <h3>LOGIN</h3>
      </div>
      <form>
        <div className="form-floating my-3">
          <input type="email" className="form-control" id="Email" />
          <label for="Email">Email</label>
        </div>
        <div className="form-floating my-3">
          <input type="password" className="form-control" id="Password" />
          <label for="Password">Password</label>
        </div>
        <div>
          <button className="btn btn-primary rounded-pill w-100 p-2">
            LogIn
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginComponent;
