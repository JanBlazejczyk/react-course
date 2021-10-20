const styles = {
  display: "flex",
  flexDirection: "column",
  width: "350px",
  margin: "20px",
  border: "solid",
  borderRadius: "10px",
  backgroundColor: "#D8E2DC",
  padding: "10px",
  borderColor: "#FFE5D9",
  boxSizing: "border-box"
};

function Form({ children }) {
  return (
    <form style={styles} className="form__wrapper">
      {children}
    </form>
  );
}

export default Form;
