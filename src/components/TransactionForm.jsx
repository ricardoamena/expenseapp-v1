import { useState } from "react";
import PropTypes from "prop-types";

function TransactionForm({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Description"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Add
      </button>
    </form>
  );
}

TransactionForm.propTypes = {
  addTransaction: PropTypes.func.isRequired,
};

export default TransactionForm;
