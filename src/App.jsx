import { useState } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    const updateTransactions = transactions.filter((t) => t.id !== id);
    setTransactions(updateTransactions);
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl text-center">
      <Header title="Expense Application - V-1" />
      <div className="mt-8">
        <TransactionForm addTransaction={addTransaction} />
      </div>
      <div className="mt-8">
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </div>
      <div className="mt-8 text-left">
        <Balance transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
