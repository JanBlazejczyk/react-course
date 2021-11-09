import React from "react";

class Result extends React.Component {
  render() {
    return (
      <div className="result-container">
        <h2>You have to pay:</h2>
        <p>{this.props.amount}</p>
        <button onClick={this.props.onClick}>{this.props.buttonLabel}</button>
      </div>
    );
  }
}

export default Result;
