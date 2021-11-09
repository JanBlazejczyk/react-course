import React from "react";
import "./styles.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();
    this.bio = React.createRef();
    this.gender = React.createRef();
    this.terms = React.createRef();
  }

  state = {
    name: "",
    email: "",
    bio: "",
    gender: "",
    terms: "no",
    errors: [],
    accepted: false
  };

  addBorders = () => {
    if (this.state.name === "") {
      this.name.current.style.border = "#f00 solid 1px";
    }
    if (this.state.email === "") {
      this.email.current.style.border = "#f00 solid 1px";
    }
    if (this.state.bio === "") {
      this.bio.current.style.border = "#f00 solid 1px";
    }
  };

  populateErrors = () => {
    for (const field in this.state) {
      if (this.state[field] === "") {
        let error = `${field} cannot be empty`;
        this.setState((prevState) => ({
          errors: [...prevState.errors, error]
        }));
      } else if (field === "terms") {
        if (this.state[field] === "no") {
          let error = "Please accept the terms";
          this.setState((prevState) => ({
            errors: [...prevState.errors, error]
          }));
        }
      }
    }
    return new Promise((resolve) => {
      resolve("Errors are populated");
    });
  };

  displayErrors = () => {
    return this.state.errors.map((error, index) => (
      <li key={index}>{error}</li>
    ));
  };

  resetErrors = () => {
    this.setState({ errors: [] });
  };

  resetBorders = () => {
    this.name.current.style.border = "solid 1px grey";
    this.email.current.style.border = "solid 1px grey";
    this.bio.current.style.border = "solid 1px grey";
  };

  acceptForm = () => {
    this.setState((prevState) => ({
      accepted: !prevState.accepted
    }));
  };

  handleClick = (event) => {
    event.preventDefault();
    this.resetErrors();
    this.resetBorders();
    this.populateErrors().then(() => {
      if (this.state.errors.length === 0) {
        this.acceptForm();
      }
    });
    this.addBorders();
  };

  handleCheckboxChange = (event) => {
    let isChecked = event.target.checked;
    let keyName = event.target.name;

    if (isChecked) {
      this.setState({ [keyName]: "yes" });
    } else {
      this.setState({ [keyName]: "no" });
    }
  };

  handleInputChange = (event) => {
    const keyName = event.target.name;
    this.setState({ [keyName]: event.target.value });
  };

  render() {
    if (this.state.accepted === false) {
      return (
        <form>
          <input
            type="text"
            value={this.state.name}
            placeholder="Name"
            className="form__name"
            name="name"
            ref={this.name}
            onChange={this.handleInputChange}
          />

          <input
            type="text"
            value={this.state.email}
            placeholder="E-mail"
            className="form__email"
            name="email"
            ref={this.email}
            onChange={this.handleInputChange}
          />

          <textarea
            placeholder="Bio"
            className="form__bio"
            value={this.state.bio}
            name="bio"
            ref={this.bio}
            onChange={this.handleInputChange}
          />
          <div
            className="form__gender--container"
            ref={this.gender}
            onChange={this.handleInputChange}
          >
            <input
              type="radio"
              name="gender"
              value="male"
              id="gender-male"
              className="form__radio"
            />
            <label htmlFor="gender-male" className="form__label--gender-male">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="gender-female"
              className="form__radio"
            />
            <label
              htmlFor="gender-female"
              className="form__label--gender-female"
            >
              Female
            </label>
            <input
              type="radio"
              name="gender"
              value="other"
              id="gender-other"
              className="form__radio"
            />
            <label htmlFor="gender-other" className="form__label--gender-other">
              Other
            </label>
          </div>
          <div className="form__clause--container">
            <input
              type="checkbox"
              id="clause"
              name="terms"
              className="form__checkbox"
              ref={this.terms}
              onClick={this.handleCheckboxChange}
            />
            <label htmlFor="clause" className="form__label--clause">
              I accept the terms
            </label>
          </div>

          <div className="form__error--container">{this.displayErrors()}</div>

          <div className="form__submit--container">
            <button
              type="submit"
              className="form__submit"
              onClick={this.handleClick}
            >
              Submit
            </button>
          </div>
        </form>
      );
    } else {
      return (
        <div className="message__container">
          <h2>Thanks for submitting!</h2>
        </div>
      );
    }
  }
}

export default Form;
