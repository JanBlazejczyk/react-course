import "./UserProfile.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

function UserProfile({ user }) {
  const { name, username, email, phone, address, website, company } = user;
  const backIcon = (
    <FontAwesomeIcon
      className="user-profile__icon"
      size="2x"
      icon={faArrowCircleLeft}
    />
  );

  return (
    <div className="user-profile__container">
      <div className="icon-container">
        <Link to="/users">{backIcon}</Link>
      </div>
      <div className="user-profile">
        <p>
          <span className="user-profile__label">Name: </span>
          {name}
        </p>
        <p>
          <span className="user-profile__label">User name: </span>
          {username}
        </p>
        <p>
          <span className="user-profile__label">E-mail: </span>
          {email}
        </p>
        <p>
          <span className="user-profile__label">Phone: </span>
          {phone}
        </p>
        <p>
          <span className="user-profile__label">Address: </span>
          {address.street} {address.suite} {address.city} {address.zipcode}
        </p>
        <p>
          <span className="user-profile__label">Website: </span>
          {website}
        </p>
        <p>
          <span className="user-profile__label">Company: </span>
          {company.name}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
