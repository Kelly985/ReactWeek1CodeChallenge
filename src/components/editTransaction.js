import React, { useState } from "react";

function EditTransaction({ transaction, onEdit }) {
  const [description, setDescription] = useState(transaction.description);
  const [amount, setAmount] = useState(transaction.amount);
  const [category, setCategory] = useState(transaction.category);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedTransaction = {
      ...transaction,
      description,
      amount,
      category
    };
    onEdit(updatedTransaction);
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Save</button>
    </form>
  );
}

export default EditTransaction;
