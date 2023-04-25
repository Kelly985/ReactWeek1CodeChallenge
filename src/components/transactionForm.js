import React, { useState } from "react";
import '../App.css';

function TransactionForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      date: new Date().toLocaleDateString(),
      description,
      amount,
      category
    };
    

    fetch("http://localhost:3099/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
      .then(res => res.json())
      .then(() => {
        console.log("New transaction added");
        setDescription("");
        setAmount("");
        setCategory("");
      })
      .catch(error => console.error(error));
  }

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}


export default TransactionForm;
