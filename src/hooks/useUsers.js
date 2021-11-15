import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedAction } from "../redux/actions/actionCreators";
import {
  createUserThunk,
  loadUsersThunk,
  loginUserThunk,
} from "../redux/thunks/userThunks";

const useUsers = () => {
  const { user, users } = useSelector(({ user, users }) => ({ user, users }));
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

  const loadUsers = useCallback(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  return {
    user,
    users,
    loginUser,
    createUser,
    isLogged,
    loadUsers,
  };
};

export default useUsers;
