import { UserInfoContext } from "../Contexts/UserInfo";
import withUser from "./withUser";

import NavMenu from "./NavMenu";
import "./Content.css";

function Content() {
  return (
    <UserInfoContext.Consumer>
      {(userName) => (
        <div className="content__container content__container--main">
          <div className="content__container content__container--nav">
            <NavMenu userName={userName} />
          </div>
          <div className="content__container content__container--content">
            <h1>Hello {userName}</h1>
          </div>
        </div>
      )}
    </UserInfoContext.Consumer>
  );
}

export default withUser(Content);
