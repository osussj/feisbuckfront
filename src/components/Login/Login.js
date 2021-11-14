import { useState } from "react";
import "./Login.css";
import useUsers from "../../hooks/useUsers";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const initialData = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const { loginUser } = useUsers();
  const [userData, setUserData] = useState(initialData);
  const changeData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    loginUser(userData);
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-md-5">
          <form
            className="login-form"
            onSubmit={onSubmit}
            autoComplete="off"
            noValidate
          >
            <div className="mb-3">
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Username"
                onChange={changeData}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
                onChange={changeData}
              />
            </div>
            <div className="text-center pt-3 pb-3">
              <button className="btn btn-custom btn-lg btn-block mt-3">
                Login
              </button>
            </div>
            <div className="text-center pt-3 pb-3">
              <Link to="/register">
                <button type="button" className="btn btn-success btn-lg mt-3">
                  Create New Account
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
