import { useState } from "react";

import "./styles.css";
import { Snackbar } from "./components/Snackbar";
import { Button } from "./components/Button";

export default function App() {
  const [SnackDisplay, setSnackDisplay] = useState(false);

  const showSnack = () => {
    setSnackDisplay(true);
  };

  const hideSnack = (time) => {
    setTimeout(() => {
      setSnackDisplay(false);
    }, time);
  };

  return (
    <div className="App">
      <Button handleClick={showSnack}>Show snack</Button>
      <Snackbar
        text="Snickers"
        active={SnackDisplay}
        handleClose={hideSnack}
        time="6000"
        position="bottom-right"
        type="error"
      />
    </div>
  );
}
