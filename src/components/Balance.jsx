import PropTypes from "prop-types";

function Balance({ transactions }) {
  const total = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Balance Total:</h2>
      <p
        className={`text-2xl font-bold ${
          total >= 0 ? "text-green-500" : "text-red-500"
        } text-right`}
      >
        ${total.toFixed(2)}
      </p>
    </div>
  );
}

Balance.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default Balance;
