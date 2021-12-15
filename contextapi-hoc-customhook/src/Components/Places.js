import { Link } from "react-router-dom";

import { UserInfoContext } from "../Contexts/UserInfo";
import withUser from "./withUser";

import NavMenu from "./NavMenu";
import "./Places.css";

function Places() {
  return (
    <UserInfoContext.Consumer>
      {(userName) => (
        <div className="places__container places__container--main">
          <div>
            <NavMenu userName={userName} />
          </div>
          <div className="places__container places__container--content">
            <Link to="/">Back</Link>
            <h1>Places you have visited {userName}</h1>
            <div>
              <p>Warsaw</p>
              <p>Lublin</p>
              <p>Lisbon</p>
              <p>Paris</p>
              <p>Madrid</p>
            </div>
          </div>
        </div>
      )}
    </UserInfoContext.Consumer>
  );
}

export default withUser(Places);
