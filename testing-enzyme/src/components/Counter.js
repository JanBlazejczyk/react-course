import { useState, useEffect, useRef } from "react";

import Button from "./Button";

function Counter({ start = null }) {
  const [counter, setCounter] = useState(0);
  const [initCounterValue, setInitCounterValue] = useState(start);

  const inputRef = useRef();

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    setCounter(counter - 1);
  }

  const handleChange = () => {
    setCounter(inputRef.current.value);
    setInitCounterValue(inputRef.current.value);
  }

  const handleReset = () => {
    setCounter(initCounterValue);
  }

  useEffect(() => {
    if (initCounterValue !== null) {
      setCounter(initCounterValue); // when the component is mounted the counter is set to start value
    }
  }, [initCounterValue]);

  return (
    <div>
      <div>{counter}</div>
      <input type="number" ref={inputRef}>Number</input>
      <Button label="Change" handleClick={handleChange} />
      <Button label="Reset" handleClick={handleReset} />
      <Button label="-" handleClick={handleDecrement} />
      <Button label="+" handleClick={handleIncrement} />
    </div>
  )
}

export default Counter;