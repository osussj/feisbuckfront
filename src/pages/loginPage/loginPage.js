import { useEffect } from "react";
import Login from "../../components/Login/Login";
import useUsers from "../../hooks/useUsers";

const LoginPage = () => {
  const { isLogged, user } = useUsers();

  useEffect(() => {
    isLogged();
    if (user.isAuth) {
      //
    }
  }, [isLogged, user.isAuth]);
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
