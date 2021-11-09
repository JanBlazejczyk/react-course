import "./styles.css";
import { useState, useEffect } from "react";

import { AddNew } from "./components/AddNew";
import { TransactionList } from "./components/TransactionList";
import { Counter } from "./components/Counter";
import { Sidebar, Transactions } from "./components/Containers";

export default function App() {
  const [income, setIncome] = useState(() => {
    const savedIncome = localStorage.getItem("income");
    const initialValue = JSON.parse(savedIncome);
    return initialValue || [];
  });
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    const initialValue = JSON.parse(savedExpenses);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // get the data from the child component
  // and update the state
  const handleAddCallback = (transaction) => {
    if (transaction.transaction === "expense") {
      setExpenses((expenses) => [...expenses, transaction]);
    } else if (transaction.transaction === "income") {
      setIncome((income) => [...income, transaction]);
    }
  };

  const handleDeleteCallback = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    const newIncome = income.filter((eachIncome) => eachIncome.id !== id);
    setExpenses(newExpenses);
    setIncome(newIncome);
  };

  return (
    <div className="App">
      <Sidebar>
        <AddNew parentAddCallback={handleAddCallback} />
        <Counter incomeArray={income} expensesArray={expenses} />
      </Sidebar>
      <Transactions>
        <TransactionList
          parentDeleteCallback={handleDeleteCallback}
          transactionArray={expenses}
          heading="Expenses"
        />
        <TransactionList
          parentDeleteCallback={handleDeleteCallback}
          transactionArray={income}
          heading="Income"
        />
      </Transactions>
    </div>
  );
}
