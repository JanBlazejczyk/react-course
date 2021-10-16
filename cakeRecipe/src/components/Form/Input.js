function Input({ bgColor, color, borderSize, borderRadius, borderColor }) {
  return (
    <input
      type="text"
      style={{
        // props
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        borderRadius: `${borderRadius}`,
        borderColor: `${borderColor}`,
        borderWidth: `${borderSize}`,
        // own styles
        padding: 10,
        opacity: 0.8,
        margin: "5px"
      }}
    />
  );
}

Input.defaultProps = {
  bgColor: "#FFCAD4",
  color: "#293241",
  borderSize: "0px",
  borderRadius: "0.7rem",
  borderColor: "#293241"
};

export default Input;
