import React, { useState } from 'react';

const FinanceForm = () => {
  const [entry, setEntry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(entry); // For now, just log the entry
    setEntry(''); // Clear the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Enter a finance detail"
        required
      />
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default FinanceForm;
