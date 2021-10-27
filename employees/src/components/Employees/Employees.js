import { useState } from "react";

import data from "./data";
import "./style.css";

function Employees() {
  const [activeEmployee, setActiveEmployee] = useState(null);

  function populateDetails() {
    if (activeEmployee === null) {
      return "Click the name to get the details";
    } else {
      return activeEmployee.details;
    }
  }

  function populateEmployeeList() {
    return data.map((employee) => (
      <tr key={employee.id}>
        <td className="employee__name" id={employee.id}>
          {employee.name} {employee.lastName}
        </td>
      </tr>
    ));
  }

  return (
    <div className="main-container">
      <table className="employee__list">
        <thead>
          <tr className="details__header">
            <th>Name</th>
          </tr>
        </thead>
        <tbody
          onClick={(event) => {
            setActiveEmployee(data[event.target.id]);
          }}
        >
          {populateEmployeeList()}
        </tbody>
      </table>
      <section className="details__container">
        <table className="details__table">
          <thead>
            <tr className="details__header">
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="details__body">
            <tr>
              <td>{populateDetails()}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Employees;
