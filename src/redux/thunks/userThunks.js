import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  createUserAction,
  loadUsersAction,
  loginUserAction,
} from "../actions/actionCreators";

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

export const createUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(`${urlApi}users/register`, user);
  if (response.status === 200) {
    dispatch(createUserAction(response.data));
  }
};

export const loadUsersThunk = () => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  const { data } = await axios.get(`${urlApi}social/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch(loadUsersAction(data));
};
