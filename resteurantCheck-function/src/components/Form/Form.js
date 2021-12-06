import { useState } from "react";

import "./styles/Form.css";
import { Result } from "../Result";
import { useInput, calculateBrutto } from "../../utils";

function Form() {
  const [displayForm, setDisplayForm] = useState(true);
  const [netto, handleNettoChange] = useInput("");
  const [tip, handleTipChange] = useInput("");

  const toggleDisplay = () => {
    if (displayForm) {
      setDisplayForm(false);
    } else {
      setDisplayForm(true);
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

  const tipValues = [5, 10, 15, 20];

  if (displayForm) {
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
          {tipValues.map((value) => (
            <option value={value}>{value}%</option>
          ))}
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
