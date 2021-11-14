import { useState } from "react";
import useUsers from "../../hooks/useUsers";

const Login = () => {
  const initialData = {
    username: "",
    password: "",
  };
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
  };

  return (
    <form className="row g-3" onSubmit={onSubmit} autoComplete="off" noValidate>
      <div className="col-auto">
        <label htmlFor="username" className="visually-hidden">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          onChange={changeData}
        />
      </div>
      <div className="col-auto">
        <label htmlFor="password" className="visually-hidden">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          onChange={changeData}
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary mb-3">Login</button>
      </div>
    </form>
  );
};

export default Login;
