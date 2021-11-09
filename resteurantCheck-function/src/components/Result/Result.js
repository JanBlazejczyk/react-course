import React from "react";

function Result({ amount, onClick, buttonLabel }) {
  return (
    <div className="result-container">
      <h2>You have to pay:</h2>
      <p>{amount}</p>
      <button onClick={onClick}>{buttonLabel}</button>
    </div>
  );
}

export default Result;
