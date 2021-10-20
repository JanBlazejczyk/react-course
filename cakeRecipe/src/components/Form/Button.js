import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ children, bgColor, color, icon }) {
  const colors = {
    greySky: "#D8E2DC",
    champagnePink: "#FFE5D9",
    pink: "#FFCAD4",
    lightPink: "#F4ACB7",
    mountbattenPink: "#9D8189",
    silver: "#BDC3C7",
    sunFlower: "#F1C40F",
    greenSea: "#16A085",
    bdazzledBlue: "#293241"
  };

  return (
    <button
      style={{
        // props
        color: colors[color],
        backgroundColor: colors[bgColor],
        // own styles
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: "0.8rem",
        borderWidth: "0px",
        fontWeight: 1000,
        opacity: 0.8,
        margin: "5px",
        cursor: "pointer"
      }}
    >
      <FontAwesomeIcon icon={icon} size="xs" />
      {children}
    </button>
  );
}

Button.defaultProps = {
  bgColor: "pink",
  color: "bdazzledBlue"
};

export default Button;
