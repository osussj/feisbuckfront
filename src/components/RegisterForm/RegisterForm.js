import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUsers from "../../hooks/useUsers";

const RegisterForm = () => {
  const initialData = {
    name: "",
    username: "",
    password: "",
    age: "",
  };
  const navigate = useNavigate();
  const { createUser } = useUsers();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [userRegisterData, setUserRegisterData] = useState(initialData);

  const changeData = (event) => {
    setUserRegisterData({
      ...userRegisterData,
      [event.target.id]: event.target.value,
    });
  };
  useEffect(() => {
    setButtonDisabled(
      userRegisterData.name === "" ||
        userRegisterData.username === "" ||
        userRegisterData.password === "" ||
        userRegisterData.age <= 0
    );
  }, [
    userRegisterData.name,
    userRegisterData.username,
    userRegisterData.password,
    userRegisterData.age,
  ]);
  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: userRegisterData.name,
      username: userRegisterData.username,
      password: userRegisterData.password,
      age: userRegisterData.age,
    };
    createUser(newUser);
    navigate("/");
  };

  return (
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
              id="name"
              onChange={changeData}
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="username"
              onChange={changeData}
              className="form-control"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              onChange={changeData}
              id="password"
              autoComplete="off"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              id="age"
              onChange={changeData}
              min="0"
              max="120"
              className="form-control"
              placeholder="Enter your age"
            />
          </div>
          <div className="text-center pt-3 pb-3">
            <button
              className="btn btn-success btn-lg mt-3"
              disabled={buttonDisabled}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
