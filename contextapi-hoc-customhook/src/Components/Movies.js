import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserInfoContext } from "../Contexts/UserInfo";
import withUser from "./withUser";

import NavMenu from "./NavMenu";
import "./Movies.css";

function Movies() {
  const userName = useContext(UserInfoContext);

  return (
    <div className="movies__container movies__container--main">
      <div>
        <NavMenu userName={userName} />
      </div>
      <div className="movies__container movies__container--content">
        <Link to="/">Back</Link>
        <h1>Movies you have watched {userName}</h1>
        <div>
          <p>The Seven Samurai</p>
          <p>Bonnie and Clyde</p>
          <p>Reservoir Dogs</p>
          <p>Airplane!</p>
          <p>Pan's Labyrinth</p>
        </div>
      </div>
    </div>
  );
}

export default withUser(Movies);
