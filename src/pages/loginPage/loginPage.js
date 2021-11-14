import { useEffect } from "react";
import Login from "../../components/Login/Login";
import useUsers from "../../hooks/useUsers";

const LoginPage = () => {
  const { isLogged, user } = useUsers();

  useEffect(() => {
    isLogged();
    if (user.isAuth) {
    }
  }, [isLogged, user.isAuth]);
  return (
    <>
      <h1 className="main-title">LoginPage</h1>
      <Login />
    </>
  );
};

export default LoginPage;
