import "./Button.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faTimes } from "@fortawesome/free-solid-svg-icons";

function Button({ handleClick, state }) {
  const showIcon = <FontAwesomeIcon icon={faEllipsisV} size="lg" />;
  const hideIcon = <FontAwesomeIcon icon={faTimes} size="lg" />;

  return (
    <button onClick={handleClick} className="button">
      {state ? hideIcon : showIcon}
    </button>
  );
}

export default Button;
