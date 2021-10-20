const styles = {
  active: {
    color: "#9d8189"
  },
  notActive: {
    color: "#293241"
  },
  container: {
    borderRadius: "15px",
    width: "50%",
    padding: "8px",
    margin: "5px",
    backgroundColor: "#FFCAD4",
    border: "solid"
  }
};

function MenuLink({ to, isActive, children }) {
  function setActive() {
    return isActive ? styles.active : styles.notActive;
  }

  return (
    <a href={to} style={styles.container}>
      <span style={setActive()}>{children}</span>
    </a>
  );
}

MenuLink.default = {
  isActive: "false"
};

export default MenuLink;
