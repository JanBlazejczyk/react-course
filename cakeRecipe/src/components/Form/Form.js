const styles = {
  display: "flex",
  flexDirection: "column",
  width: "350px",
  marginTop: "20px",
  border: "solid",
  borderRadius: "10px",
  backgroundColor: "#D8E2DC",
  padding: "10px",
  borderColor: "#FFE5D9"
};

function Form({ children }) {
  return (
    <form style={styles} className="form__wrapper">
      {children}
    </form>
  );
}

export default Form;
