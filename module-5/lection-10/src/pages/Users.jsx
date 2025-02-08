import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { fetchUsers } from "../services/api";
import SearchBar from "../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";
  const isOnline = searchParams.get("isOnline");
  // повертає завжди рядок
  console.log(typeof isOnline);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleChangeQuery = (value) => {
    // збираємо значення
    searchParams.set("query", value);
    searchParams.set("isOnline", true);
    // додаємо до url
    setSearchParams(searchParams);
  };

  // відфільтруємо корстувчів
  const filteredData = users.filter((user) =>
    user.firstName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <UserList users={filteredData} />
    </>
  );
};
export default Users;
