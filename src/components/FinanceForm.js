import React, { useState } from 'react';

const FinanceForm = ({ onAddTransaction }) => {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTransaction({ type, amount: parseFloat(amount), description });
    setAmount('');
    setDescription('');
  };

  return (
    <div className="form-section">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label">Type:</label>
          <select className="input-field" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="input-group">
          <label className="input-label">Amount:</label>
          <input
            className="input-field"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
          />
        </div>
        <div className="input-group">
          <label className="input-label">Description:</label>
          <input
            className="input-field"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
        </div>
        <button className="form-button" type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default FinanceForm;

