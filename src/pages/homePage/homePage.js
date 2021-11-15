import { useEffect } from "react";
import User from "../../components/Users/Users";
import useUsers from "../../hooks/useUsers";
const HomePage = () => {
  const { loadUsers, users } = useUsers();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <>
      <h1 className="main-title">HomePage</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-around">
        {users &&
          users.map((user) => {
            return <User {...user} key={user.id} />;
          })}
      </div>
    </>
  );
};
export default HomePage;
