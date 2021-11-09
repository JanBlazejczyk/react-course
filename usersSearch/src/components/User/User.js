import "./User.scss";

import { Link } from "react-router-dom";

function User({ name, userName, email, phone, id, handleSelect }) {
  return (
    <div className="user">
      <p>
        <span className="user__label">Name: </span>
        {name}
      </p>
      <p>
        <span className="user__label">User name: </span>
        {userName}
      </p>
      <p>
        <span className="user__label">E-mail: </span>
        {email}
      </p>
      <p>
        <span className="user__label">Phone: </span>
        {phone}
      </p>
      <Link onClick={handleSelect} to="/users/user-profile">
        <span className="user__link" id={id}>
          See profile
        </span>
      </Link>
    </div>
  );
}

export default User;
