import { useState, useEffect, useRef } from "react";

import "./UserContainer.scss";
import { UsersList } from "../UsersList";
import { User } from "../User";
import { UserProfile } from "../UserProfile";
import { SearchBar } from "../SearchBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function UserContainer() {
  const [userData, setUserData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState({});
  const searchBarRef = useRef();
  useEffect(() => fetchUsers(), []);

  const fetchUsers = () => {
    fetch("users.json")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log("ERROR!", error));
  };

  const handleSearchbarChange = (event) => {
    event.preventDefault();
    setSearchQuery(searchBarRef.current.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearchQuery(searchBarRef.current.value);
    }
  };

  const resetSearchBar = (event) => {
    event.preventDefault();
    setSearchQuery("");
    searchBarRef.current.value = "";
  };

  const handleUserSelect = (event) => {
    const selectedUserId = Number(event.target.id);
    let selectedUserObject = null;

    for (let user of userData) {
      if (user.id === selectedUserId) {
        selectedUserObject = user;
      }
    }
    setSelectedUser(selectedUserObject);
  };

  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="main-container">
      <Router>
        <Switch>
          <Route path="/users/user-profile">
            <UserProfile user={selectedUser} />
          </Route>
          <Route path="/users">
            <SearchBar
              placeholder="Search users by name"
              handleChange={handleSearchbarChange}
              handleEnterPress={handleEnterPress}
              handleReset={resetSearchBar}
              value={searchQuery}
              ref={searchBarRef}
            />
            <UsersList>
              {filteredUsers.map((user) => (
                <User
                  name={user.name}
                  userName={user.username}
                  email={user.email}
                  phone={user.phone}
                  key={user.id}
                  id={user.id}
                  handleSelect={handleUserSelect}
                />
              ))}
            </UsersList>
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default UserContainer;
