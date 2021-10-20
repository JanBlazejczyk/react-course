function Textarea({ bgColor, color, borderSize, borderRadius, borderColor }) {
  return (
    <textarea
      style={{
        // props
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        borderWidth: `${borderSize}`,
        borderRadius: `${borderRadius}`,
        borderColor: `${borderColor}`,
        // own styles
        opacity: "0.8",
        padding: 10,
        margin: "5px"
      }}
    />
  );
}

Textarea.defaultProps = {
  bgColor: "#FFCAD4",
  color: "#293241",
  borderSize: "0px",
  borderRadius: "1rem",
  borderColor: "#FFE5D9"
};

export default Textarea;
