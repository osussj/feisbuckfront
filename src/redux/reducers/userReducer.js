import actionTypes from "../actions/actionTypes";

const userReducer = (user = { isAuth: false, user: {} }, action) => {
  let newUser;
  switch (action.type) {
    case actionTypes.loginUser:
      newUser = { ...user, isAuth: true, user: action.user };
      break;
    case actionTypes.isLogged:
      newUser = { isAuth: true, user: action.user };
      break;

    case actionTypes.logoutUser:
      newUser = { ...user, isAuth: false, user: {} };
      break;

    case actionTypes.createUser:
      newUser = { ...user, user: action.user };
      break;
    default:
      newUser = user;
      break;
  }
  return newUser;
};

export default userReducer;
