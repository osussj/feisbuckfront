import { useEffect, useState } from "react";
import "./Login.css";
import useUsers from "../../hooks/useUsers";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const initialData = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const { loginUser, user } = useUsers();
  const [userFound, setUserFound] = useState(false);
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
    setUserData(initialData);
    if (!user.isAuth) {
      setUserFound(true);
    }
  };

  useEffect(() => {
    if (user.isAuth) {
      navigate("/home");
    }
  }, [navigate, user.isAuth]);

  const onClick = (event) => {
    event.preventDefault();
    setUserFound(false);
  };

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-md-7">
          <img
            src="https://logos-world.net/wp-content/uploads/2021/10/Meta-facebook-Logo.png"
            className="w-50"
            alt="main-logo-img"
          />
          <h3>
            Meta helps you connect and share with the people in your life.
          </h3>
        </div>
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
                value={userData.username}
                className="form-control"
                placeholder="Username"
                onChange={changeData}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="password"
                value={userData.password}
                autoComplete="off"
                className="form-control"
                placeholder="Password"
                onChange={changeData}
              />
            </div>
            {userFound ? (
              <div
                className="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                <strong>Holy guacamole!</strong> You should check in on some of
                those fields above.
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={onClick}
                ></button>
              </div>
            ) : (
              ""
            )}
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
