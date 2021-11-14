import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedAction } from "../redux/actions/actionCreators";
import { createUserThunk, loginUserThunk } from "../redux/thunks/userThunks";

const useUsers = () => {
  const { user } = useSelector((user) => user);
  const dispatch = useDispatch();

  const loginUser = (user) => {
    dispatch(loginUserThunk(user));
  };

  const createUser = (user) => {
    dispatch(createUserThunk(user));
  };

  const isLogged = useCallback(() => {
    const isLoggedUser = JSON.parse(localStorage.getItem("user"));
    if (isLoggedUser) {
      const userInfo = jwtDecode(isLoggedUser.token);
      dispatch(isLoggedAction(userInfo));
    }
  }, [dispatch]);
  return {
    user,
    loginUser,
    createUser,
    isLogged,
  };
};

export default useUsers;
