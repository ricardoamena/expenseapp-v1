import PropTypes from "prop-types";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <ul className="divide-y divide-gray-200">
      {transactions.map((transaction) => (
        <li
          key={transaction.id}
          className="py-4 flex justify-between items-center"
        >
          <span className="text-lg">{transaction.text}</span>
          <div>
            <span
              className={`font-bold ${
                transaction.amount > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {transaction.amount > 0 ? "+" : "-"} $
              {Math.abs(transaction.amount)}
            </span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="ml-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
};

export default TransactionList;
