import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

function UUID() {
  let [code, getNewCode] = useState(uuidv4());

  function updateCode() {
    getNewCode((code = uuidv4()));
  }

  return (
    <div className="container">
      <h2>YOUR UUID:</h2>
      <h3 className="UUIDcode">{code}</h3>
      <button className="btn" onClick={updateCode}>
        Generate!
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <UUID />
    </div>
  );
}
