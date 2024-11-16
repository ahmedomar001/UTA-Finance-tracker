import React, { useState } from 'react';

const ScholarshipForm = () => {
  // State to hold user input for major, GPA, and year
  const [details, setDetails] = useState({
    major: '',
    gpa: '',
    year: ''
  });

  // State to store the list of scholarships that match user input criteria
  const [scholarships, setScholarships] = useState([]);

  // State to manage loading state while fetching and filtering data
  const [loading, setLoading] = useState(false);

  // State to manage any errors during the data fetch process
  const [error, setError] = useState(null);

  // Function to fetch and filter scholarships from the local JSON file based on user input
  const findScholarshipsLocally = (gpa, year, major) => {
    setLoading(true); // Start loading when fetching data
    setError(null);   // Reset any previous errors

    // Fetch data from local JSON file located in the public directory
    fetch('/scholarships.json')
      .then(response => response.json()) // Convert response to JSON
      .then(data => {
        // Normalize user input
        const normalizedGpa = parseFloat(gpa);
        const normalizedMajor = major.trim().toLowerCase();
        const normalizedYear = year.trim().toLowerCase();

        // Filter the data based on the user's input
        const matchingScholarships = data.filter(scholarship => {
          // GPA matching logic: Check if gpa_minimum is defined and user meets the criteria
          const gpaMatch = scholarship.gpa_minimum === undefined || (typeof scholarship.gpa_minimum === 'number' && normalizedGpa >= scholarship.gpa_minimum);

          // Program/year matching logic: Handle single values and arrays
          const yearMatch = !scholarship.program || (Array.isArray(scholarship.program)
            ? scholarship.program.map(prog => prog.toLowerCase()).includes(normalizedYear)
            : scholarship.program.toLowerCase() === normalizedYear);

          // Department/major matching logic: Handle single values and arrays
          const majorMatch = !scholarship.department || (Array.isArray(scholarship.department)
            ? scholarship.department.map(dep => dep.toLowerCase()).includes(normalizedMajor)
            : scholarship.department.toLowerCase() === normalizedMajor);

          return gpaMatch && yearMatch && majorMatch;
        });

        // Set the filtered scholarships to state, limiting the results to 3 scholarships
        setScholarships(matchingScholarships.slice(0, 3));
        setLoading(false); // Stop loading once data is processed
      })
      .catch(err => {
        // Handle any errors during data fetch
        console.error('Error fetching scholarships:', err);
        setError('Failed to load scholarships.');
        setLoading(false); // Stop loading in case of an error
      });
  };

  // Function to handle input changes and update state
  const handleChange = (event) => {
    // Dynamically update state based on input field name (major, gpa, or year)
    setDetails(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submit
    console.log('User Inputs - GPA:', details.gpa, 'Year:', details.year, 'Major:', details.major);
     // Call function to find matching scholarships based on user input
    findScholarshipsLocally(details.gpa, details.year, details.major);
  };

  return (
    <div>
      {/* Form to capture user input for major, GPA, and year */}
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
          type="number"
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

      {/* Display a loading message while fetching data */}
      {loading && <p>Loading...</p>}
      {/* Display an error message if an error occurs */}
      {error && <p>{error}</p>}

      {/* Display the list of matching scholarships or a message if none are found */}
      <div>
        <h2>Matching Scholarships</h2>
        {scholarships.length > 0 ? (
          scholarships.map((scholarship, index) => (
            <div key={index}>
              <h3>{scholarship.name}</h3>
              <p>{scholarship.description}</p>
            </div>
          ))
        ) : (
          <p>No scholarships found.</p>
        )}
      </div>
    </div>
  );
};

export default ScholarshipForm;
