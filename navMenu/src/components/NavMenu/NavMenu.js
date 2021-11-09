import "./NavMenu.css";
import { Button } from "../Button";

import { NavLink } from "react-router-dom";

function NavMenu({ active, handleClose }) {
  if (active) {
    return (
      <nav className="nav-menu__container slide-in-blurred-left">
        <div className="close-btn">
          <Button state="false" handleClick={handleClose} />
        </div>

        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
          className="nav-link"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
          className="nav-link"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
          className="nav-link"
        >
          Contact
        </NavLink>
      </nav>
    );
  } else {
    return null;
  }
}

export default NavMenu;
