import React from 'react';

const FinanceList = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction, index) => (
        <li key={index}>
          {transaction.type}: ${transaction.amount} - {transaction.description}
        </li>
      ))}
    </ul>
  );
}

export default FinanceList;
