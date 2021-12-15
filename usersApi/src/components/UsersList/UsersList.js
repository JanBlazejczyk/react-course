import "./UsersList.scss";
import { User } from "../User";
import { UserDetails } from "../UserDetails";
import { useEffect, useState } from "react";

import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import api from "../../api";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    api
      .get("?results=10&inc=name,email,login,registered,picture,location")
      .then((data) => {
        setUsers(data.results);
      })
      .then(
        setTimeout(() => {
          setIsLoading(false);
          setError(false);
        }, 3000)
      )
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <div className="users-list">
      <Router>
        <div className="users-list">
          <Switch>
            <Route exact path="/users/:userId">
              <UserDetails users={users} />
            </Route>
            <Route path="/users">
              {error && <p>An error has occured</p>}
              {users.map((user) => (
                <ReactPlaceholder
                  type="media"
                  rows={4}
                  showLoadingAnimation={true}
                  ready={!isLoading}
                  style={{
                    width: "300px",
                    marginLeft: "20px"
                  }}
                  key={user.login.uuid}
                >
                  <User
                    userId={user.login.uuid}
                    name={`${user.name.title} ${user.name.first}`}
                    lastName={user.name.last}
                    userName={user.login.username}
                    email={user.email}
                    registered={user.registered.date}
                    photo={user.picture.medium}
                    address={`${user.location.city}, ${user.location.street.name} ${user.location.street.number}`}
                    key={user.login.uuid}
                  />
                </ReactPlaceholder>
              ))}
            </Route>
            <Route path="/">
              <Redirect to="/users" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default UsersList;
