import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map(({ id, firstName, lastName }) => (
          <li key={id}>
            <Link to={`/users/${id}`}>
              {firstName} {lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
