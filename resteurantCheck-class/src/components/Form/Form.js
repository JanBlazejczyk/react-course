import React from "react";

import "./styles/Form.css";
import { Result } from "../Result";

class Form extends React.Component {
  state = {
    display: "form",
    netto: "",
    tip: ""
  };

  setDisplay = () => {
    if (this.state.display === "form") {
      this.setState({ display: "result" });
    } else {
      this.setState({ display: "form" });
    }
  };

  resetState = () => {
    this.setState({
      display: "form",
      netto: "",
      tip: ""
    });
  };

  handleChange = (event) => {
    const keyName = event.target.name;
    this.setState({ [keyName]: event.target.value });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setDisplay();
  };

  handleResultClick = (event) => {
    event.preventDefault();
    this.setDisplay();
    this.resetState();
  };

  calculateBrutto = (vatRate = 23) => {
    const nettoPrice = Number(this.state.netto);

    if (nettoPrice > 0) {
      const tip = Number(this.state.tip);
      const vatPercent = vatRate / 100;
      const bruttoPrice = nettoPrice + nettoPrice * vatPercent;
      const bruttoPlusTip = bruttoPrice + (bruttoPrice * tip) / 100;

      return bruttoPlusTip.toFixed(2);
    } else {
      return "Please input a positive decimal";
    }
  };

  render() {
    if (this.state.display === "form") {
      return (
        <form>
          <h2>Calculate your cost</h2>
          <input
            type="number"
            className="num-input"
            name="netto"
            onChange={this.handleChange}
          />

          <select id="tip-select" name="tip" onChange={this.handleChange}>
            <option value="">How much tip?</option>
            <option value="5">5%</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="20">20%</option>
          </select>

          <button onClick={this.handleClick}>Calculate</button>
        </form>
      );
    } else {
      return (
        <Result
          amount={this.calculateBrutto()}
          buttonLabel="New Meal"
          onClick={this.handleResultClick}
        />
      );
    }
  }
}

export default Form;
