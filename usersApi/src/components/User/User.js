import "./User.scss";

import { Link } from "react-router-dom";

function User({
  userId,
  userName,
  email,
  registered,
  photo,
  name = "No name given",
  lastName = "No lastname given",
  address = "no address given"
}) {
  const getRegisteredDate = () => {
    const date = registered.slice(0, 10);
    return date;
  };

  return (
    <div className="user">
      <div className="user__header">
        <Link to={`/users/${userId}`}>
          <span className="user__header--username">{userName}</span>
        </Link>
        <img src={photo} alt="User profile" />
      </div>
      <span className="user__line">
        <span className="user__label">Name: </span>
        {name} {lastName}
      </span>
      <span className="user__line">
        <span className="user__label">E-mail: </span>
        {email}
      </span>
      <span className="user__line">
        <span className="user__label">Address: </span>
        {address}
      </span>
      <span className="user__line">
        <span className="user__label">Registered: </span>
        {getRegisteredDate()}
      </span>
    </div>
  );
}

export default User;
