import React, { useState } from 'react';

const ScholarshipForm = () => {
  const [details, setDetails] = useState({
    major: '',
    gpa: '',
    year: ''
  });

  const handleChange = (event) => {
    setDetails(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(details); // For now, just log the details
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="major"
        type="text"
        value={details.major}
        onChange={handleChange}
        placeholder="Your major"
        required
      />
      <input
        name="gpa"
        type="text"
        value={details.gpa}
        onChange={handleChange}
        placeholder="Your GPA"
        required
      />
      <input
        name="year"
        type="text"
        value={details.year}
        onChange={handleChange}
        placeholder="Your year"
        required
      />
      <button type="submit">Find Scholarships</button>
    </form>
  );
}

export default ScholarshipForm;
