import React, { useEffect, useState } from "react";
import '../App.css'
import EditTransaction from "./editTransaction";

function TransactionTable() {
  const [transactions, setTransactions] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3099/transactions")
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions));
  }, []);


  function handleDelete(id) {
    fetch(`http://localhost:3099/transactions/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Transaction deleted successfully!");
          setTransactions(transactions.filter((t) => t.id !== id));
        } else {
          throw new Error("Transaction could not be deleted.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  function handleUpdate(updatedTransaction) {
    const updatedTransactions = transactions.map((transaction) =>
    transaction.id === updatedTransaction.id ? updatedTransaction : transaction
    );
    setTransactions(updatedTransactions);
    setEditId(null);
    }


  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>
  {editId === transaction.id ? (
    <EditTransaction
      transaction={transaction}
      onEdit={handleUpdate}
      onCancel={() => setEditId(null)}
    />
  ) : (
    <button className="edit-btn" onClick={() => setEditId(transaction.id)}>
      Edit
    </button>
  )}

  <button className="delete-btn" onClick={() => handleDelete(transaction.id)}>
    Delete
  </button>
</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
