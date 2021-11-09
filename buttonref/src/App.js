import "./styles.css";
import { useRef, useEffect } from "react";

import { Button } from "./components/Button";

export default function App() {
  const buttonReference = useRef();

  const handleMouseEnter = () => {
    buttonReference.current.style.backgroundColor = "blue";
  };

  useEffect(() => {
    buttonReference.current.style.backgroundColor = "red";
    buttonReference.current.style.color = "white";
  }, []);

  return (
    <div className="App">
      <h3>Button that changes color from blue to red when the app loads</h3>
      <Button onMouseEnter={handleMouseEnter} ref={buttonReference} />
      <h3>Feel free to change it back to blue by hovering it</h3>
    </div>
  );
}
