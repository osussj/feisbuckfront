import actionTypes from "./actionTypes";

export const createUserAction = (user) => ({
  type: actionTypes.createUser,
  user,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const isLoggedAction = (user) => ({
  type: actionTypes.isLogged,
  user,
});

export const logoutUserAction = () => ({
  type: actionTypes.logoutUser,
});
