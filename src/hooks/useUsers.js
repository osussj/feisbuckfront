import { useDispatch, useSelector } from "react-redux";
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
  return {
    user,
    loginUser,
    createUser,
  };
};

export default useUsers;
