import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_URL_API;
export const loginUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(`${urlApi}users/login`, user);
  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(loginUserAction(user));
    localStorage.setItem("user", JSON.stringify({ token: token }));
  }
};
