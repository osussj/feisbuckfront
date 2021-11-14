import actionTypes from "./actionTypes";

export const createUserAction = (user) => ({
  type: actionTypes.createUser,
  user,
});
