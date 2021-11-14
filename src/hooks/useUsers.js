import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../redux/thunks/userThunks";

const useUsers = () => {
  const { user } = useSelector((user) => user);
  const dispatch = useDispatch();

  const loginUser = (user) => {
    dispatch(loginUserThunk(user));
  };
  return {
    user,
    loginUser,
  };
};

export default useUsers;
