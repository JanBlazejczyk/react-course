import { useState } from "react";

import "./styles/Form.css";
import { Result } from "../Result";
import { useInput, calculateBrutto } from "../../utils";

function Form() {
  const [display, setDisplay] = useState("form");
  const [netto, handleNettoChange] = useInput("");
  const [tip, handleTipChange] = useInput("");

  const toggleDisplay = () => {
    if (display === "form") {
      setDisplay("result");
    } else {
      setDisplay("form");
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    toggleDisplay();
  };

  const handleResultClick = (event) => {
    event.preventDefault();
    toggleDisplay();
  };

  if (display === "form") {
    return (
      <form>
        <h2>Calculate your cost</h2>
        <input
          type="number"
          className="num-input"
          name="netto"
          onChange={handleNettoChange}
        />

        <select
          id="tip-select"
          className="form-elem"
          name="tip"
          onChange={handleTipChange}
        >
          <option value="">How much tip?</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="20">20%</option>
        </select>

        <button onClick={handleClick}>Calculate</button>
      </form>
    );
  } else {
    return (
      <Result
        amount={calculateBrutto(netto, tip)}
        buttonLabel="New Meal"
        onClick={handleResultClick}
      />
    );
  }
}

export default Form;
