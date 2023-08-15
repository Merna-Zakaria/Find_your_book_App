import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import logo from "../assets/images/logo.jpg";

const Login = ({ onLogin }) => {
  const { login } = useAuth();

  const [creds, setCreds] = useState({});
  return (
    <div className="blueBg d-flex align-items-center justify-content-center">
      <form>
        <div style={{ padding: 10 }} className="form-group col-6 w-100">
          <h3>LOGIN</h3>
          <br />
          <label>Username:</label>
          <br />
          <input
            className="form-control"
            type="text"
            onChange={(e) => setCreds({ ...creds, userName: e.target.value })}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            className="form-control"
            type="password"
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
          <br />
          <br />
          <button
            onClick={() => login(creds)}
            type="submit"
            className="btn btn-info"
            disabled={!creds?.userName || !creds.password}
          >
            Submit
          </button>
        </div>
      </form>
      <div className="col-6">
        <img src={logo} alt="logo" className="loginImg" />
      </div>
    </div>
  );
};

export default Login;
