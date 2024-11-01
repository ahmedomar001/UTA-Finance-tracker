import React from 'react';
import FinanceForm from '../components/FinanceForm';
import FinanceList from '../components/FinanceList';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to UTA Finance Tracker</h1>
      <FinanceForm />
      <FinanceList />
    </div>
  );
}

export default HomePage;
