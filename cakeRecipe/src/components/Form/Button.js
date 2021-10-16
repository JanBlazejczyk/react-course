import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ children, bgColor, color, icon }) {
  return (
    <button
      style={{
        // props
        color: `${color}`,
        backgroundColor: `${bgColor}`,
        // own styles
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: "1rem",
        borderWidth: "0px",
        // border: 0.1,
        fontWeight: 1000,
        opacity: 0.8,
        margin: "5px"
      }}
    >
      <FontAwesomeIcon icon={icon} size="xs" />
      {children}
    </button>
  );
}

Button.defaultProps = {
  bgColor: "#FFCAD4",
  color: "#293241"
};

export default Button;
