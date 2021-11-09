import "./Button.scss";

import classNames from "classnames";

function Button({ children, confirm, abort, close, handleClick }) {
  const classes = classNames({
    button: true,
    "button--confirm": confirm,
    "button--abort": abort,
    "button--close": close
  });

  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
