import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchUserById } from "../services/api";

const UserDetails = () => {
  const { userId } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUserById(userId);
      setUser(data);
    };
    getData();
  }, [userId]);

  if (!user) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div>
      UserDetails #{userId}
      <img src={user.image} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      <nav className="nav">
        <Link to="info">Info</Link>
        <Link to="posts">Posts</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default UserDetails;
