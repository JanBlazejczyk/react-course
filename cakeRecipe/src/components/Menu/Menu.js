const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "solid",
  borderRadius: "10px",
  borderColor: "#FFE5D9",
  width: "350px",
  backgroundColor: "#D8E2DC",
  margin: "20px",
  padding: "10px",
  boxSizing: "border-box"
};

function Menu({ children }) {
  return <nav style={styles}>{children}</nav>;
}

export default Menu;
