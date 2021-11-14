import useUsers from "../hooks/useUsers";
import LoginPage from "../pages/loginPage/loginPage";

const PrivateRoute = ({ children }) => {
  const { user } = useUsers();
  return user.isAuth ? children : <LoginPage />;
};

export default PrivateRoute;
