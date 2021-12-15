import "./NavItem.css";

import { Link } from "react-router-dom";

export function DesktopNavItem({ icon, text, to }) {
  return (
    <div className="nav-item__container">
      <Link to={to}>
        <span>{icon} </span>
        <span>{text}</span>
      </Link>
    </div>
  );
}

export function MobileNavItem({ icon, to }) {
  return (
    <div className="nav-item__container">
      <Link to={to}>
        <span>{icon}</span>
      </Link>
    </div>
  );
}
