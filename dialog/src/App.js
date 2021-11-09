import { useState } from "react";

import "./styles.scss";

import { Button } from "./components/Button";
import { Dialog } from "./components/Dialog";

export default function App() {
  const [DialogActive, setDialogActive] = useState(false);

  const handleDialogOpen = () => {
    setDialogActive(true);
  };
  const handleDialogClose = () => {
    setDialogActive(false);
  };
  const handleAbortClick = () => {
    console.log("Mission aborted!");
  };
  const handleConfirmClick = () => {
    console.log("Confirmation successful!");
  };

  return (
    <div className="App">
      <Button handleClick={handleDialogOpen}>Open Dialog</Button>
      <Dialog
        title="I am dialog title"
        active={DialogActive}
        content="Example dialog content"
      >
        <Button confirm handleClick={handleConfirmClick}>
          Confirm
        </Button>
        <Button abort handleClick={handleAbortClick}>
          Abort
        </Button>
        <Button close handleClick={handleDialogClose}>
          Close
        </Button>
      </Dialog>
    </div>
  );
}
