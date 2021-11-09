import "./Counter.css";

function Counter({ incomeArray, expensesArray }) {
  const calculateBalance = (incomeArray, expensesArray) => {
    const balancePlusIncome = incomeArray.reduce((balance, transaction) => {
      return (balance += transaction.amount);
    }, 0);

    const finalBalance = expensesArray.reduce((balance, transaction) => {
      return (balance -= transaction.amount);
    }, balancePlusIncome);

    return (
      <span className={finalBalance >= 0 ? "counter" : "counter__red"}>
        {finalBalance}
      </span>
    );
  };

  return (
    <div className="counter__container">
      <h4 className="counter__title">Balance</h4>
      <div>{calculateBalance(incomeArray, expensesArray)}</div>
    </div>
  );
}

export default Counter;
