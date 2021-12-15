import "./UserDetails.scss";
import { useEffect, useState } from "react";

import { User } from "../User";
import { UserLocation } from "../UserLocation";

import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

function UserDetails({ users }) {
  const [user, setUser] = useState(null);
  const [position, setPosition] = useState(null);
  const { userId } = useParams();

  const backIcon = (
    <FontAwesomeIcon
      className="user-profile__icon"
      size="2x"
      icon={faArrowCircleLeft}
    />
  );

  const setActiveUser = () => {
    for (let activeUser of users) {
      if (activeUser.login.uuid === userId) {
        setUser(activeUser);
      }
    }
  };

  const getPosition = () => {
    let userPosition = [];
    for (let activeUser of users) {
      if (activeUser.login.uuid === userId) {
        userPosition = [
          Number(activeUser.location.coordinates.latitude),
          Number(activeUser.location.coordinates.longitude)
        ];
        setPosition(userPosition);
      }
    }
  };

  useEffect(() => {
    setActiveUser();
    getPosition();
  }, [users, userId]);

  return (
    <div className="user__details">
      <div className="user__info">
        <Link to="/users">{backIcon}</Link>
        {user && (
          <User
            name={`${user.name.title} ${user.name.first}`}
            lastName={user.name.last}
            userName={user.login.username}
            email={user.email}
            registered={user.registered.date}
            photo={user.picture.medium}
            address={`${user.location.city}, ${user.location.street.name} ${user.location.street.number}`}
            key={user.login.uuid}
          />
        )}
      </div>
      <div className="user-profile__map">
        {position !== null ? <UserLocation coordinates={position} /> : null}
      </div>
    </div>
  );
}

export default UserDetails;
