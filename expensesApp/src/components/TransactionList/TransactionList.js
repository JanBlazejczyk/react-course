import "./TransactionList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function TransactionList({ parentDeleteCallback, transactionArray, heading }) {
  const handleClick = (event) => {
    let id = event.currentTarget.id;
    parentDeleteCallback(id);
  };

  return (
    <section className="transaction-list__container">
      <h3 className="list__heading">{heading}</h3>
      <table>
        <thead className="list__heading--table">
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Cathegory</th>
          </tr>
        </thead>
        <tbody>
          {transactionArray.map((transaction, index) => (
            <tr
              key={index}
              className={
                transaction.transaction === "expense"
                  ? "expense-transaction"
                  : "income-transaction"
              }
            >
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.cathegory}</td>
              <td
                id={transaction.id}
                className={
                  transaction.transaction === "expense"
                    ? "expense-transaction"
                    : "income-transaction"
                }
                onClick={handleClick}
              >
                <FontAwesomeIcon className="delete__icon" icon={faTrashAlt} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TransactionList;
