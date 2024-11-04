import React, { useState } from 'react';
import FinanceForm from '../components/FinanceForm';
import FinanceList from '../components/FinanceList';

const HomePage = () => {
  const [transactions, setTransactions] = useState([]);
  const [goalAmount, setGoalAmount] = useState('');
  const [contributedAmount, setContributedAmount] = useState('');
  const [remainingAmount, setRemainingAmount] = useState('');

  const addTransaction = transaction => {
    setTransactions([...transactions, transaction]);
  };

  const handleGoalSubmit = event => {
    event.preventDefault();
    const newRemainingAmount = goalAmount - contributedAmount;
    setRemainingAmount(newRemainingAmount);
    setContributedAmount(''); // Reset the contributed amount field
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to UTA Finance Tracker</h1>
      <FinanceForm onAddTransaction={addTransaction} />
      <FinanceList transactions={transactions} />

      <div className="form-section">
        <h2>Set Budget Goal</h2>
        <form onSubmit={handleGoalSubmit}>
          <div className="input-group">
            <label className="input-label">Goal Amount:</label>
            <input
              className="input-field"
              type="number"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              placeholder="Enter your budget goal"
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label">Contributed Amount:</label>
            <input
              className="input-field"
              type="number"
              value={contributedAmount}
              onChange={(e) => setContributedAmount(e.target.value)}
              placeholder="Amount contributed"
              required
            />
          </div>
          <button className="form-button" type="submit">Update Goal Progress</button>
        </form>
        {remainingAmount !== null && (
          <div className="remaining-amount">
            Remaining Amount to Reach Goal: ${remainingAmount}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
