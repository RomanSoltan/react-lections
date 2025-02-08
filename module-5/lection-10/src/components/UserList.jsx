import { Link, useLocation } from "react-router-dom";

const UserList = ({ users }) => {
  // повертає обєкт, в якому є вся картина, де ми зараз знаходимся
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <ul>
        {users.map(({ id, firstName, lastName }) => (
          <li key={id}>
            <Link to={`/users/${id}`} state={location}>
              {firstName} {lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
