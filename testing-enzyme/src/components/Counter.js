import { useState, useEffect } from "react";

import Button from "./Button";

function Counter({ start = 0 }) {
  const [counter, setCounter] = useState(0);
  const [initCounterValue, setInitCounterValue] = useState(start);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    setCounter(Number(counter) + 1);
  }

  const handleDecrement = () => {
    setCounter(counter - 1);
  }

  const handleChange = () => {
    setCounter(inputValue);
    setInitCounterValue(inputValue);
  }

  const handleReset = () => {
    setCounter(initCounterValue);
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    setCounter(initCounterValue); // when the component is mounted the counter is set to start value
  }, [initCounterValue]);

  return (
    <div>
      <div className="counter-value">{counter}</div>
      <input className="counter-input" type="number" value={inputValue} onChange={handleInputChange} />
      <Button className="change-btn" label="Change" handleClick={handleChange} />
      <Button className="reset-btn" label="Reset" handleClick={handleReset} />
      <Button className="decrement-btn" label="-" handleClick={handleDecrement} />
      <Button className="increment-btn" label="+" handleClick={handleIncrement} />
    </div>
  )
}

export default Counter;