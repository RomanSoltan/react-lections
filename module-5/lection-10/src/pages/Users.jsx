import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { fetchUsers } from "../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getData();
  }, []);
  return (
    <>
      <UserList users={users} />
    </>
  );
};
export default Users;
