import { forwardRef } from "react";

const styles = {
  backgroundColor: "blue",
  padding: 20
};

const Button = forwardRef((props, ref) => {
  return (
    <button style={styles} ref={ref} {...props}>
      I change color
    </button>
  );
});

export default Button;
