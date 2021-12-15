import { DesktopNavItem, MobileNavItem } from "./NavItem";

import { FaHome, FaMapMarkedAlt, FaFilm } from "react-icons/fa";

import useMobile from "../Hooks/useMobile";
import "./NavMenu.css";

function NavMenu({ userName }) {
  const mobileView = useMobile();

  if (mobileView) {
    return (
      <section className="container">
        <p>Logged in as {userName}</p>
        <MobileNavItem to="/" icon={<FaHome />} />
        <MobileNavItem to="/places" icon={<FaMapMarkedAlt />} />
        <MobileNavItem to="/movies" icon={<FaFilm />} />
      </section>
    );
  }

  return (
    <section className="container">
      <p>Logged in as {userName}</p>
      <DesktopNavItem to="/" text="Home" icon={<FaHome />} />
      <DesktopNavItem to="/places" text="Places" icon={<FaMapMarkedAlt />} />
      <DesktopNavItem to="/movies" text="Movies" icon={<FaFilm />} />
    </section>
  );
}

export default NavMenu;
