// Import the built-in 'fs' module to read files
const fs = require('fs');

const findScholarshipsLocally = (gpa, year, major) => {
  setLoading(true); // Start loading indicator
  setError(null);   // Clear any previous errors

  // Fetch the data from the local JSON file
  fetch('/scholarships.json')
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      // Filter the data based on user inputs (adjusted for actual fields)
      const matchingScholarships = data.filter(scholarship => {
        // GPA matching logic: Check if gpa_minimum exists and is met by the user
        const gpaMatch = scholarship.gpa_minimum === undefined || parseFloat(gpa) >= scholarship.gpa_minimum;

        // Year/program matching logic: Handle single values and arrays
        const yearMatch = !scholarship.program || (Array.isArray(scholarship.program)
          ? scholarship.program.includes(year)
          : scholarship.program === year);

        // Major/department matching logic: Handle single values and arrays
        const majorMatch = !scholarship.department || (Array.isArray(scholarship.department)
          ? scholarship.department.includes(major)
          : scholarship.department === major);

        // Return true if all conditions are met
        return gpaMatch && yearMatch && majorMatch;
      });

      // Limit results to 3 and set the state
      setScholarships(matchingScholarships.slice(0, 3));
      setLoading(false); // Stop loading indicator
    })
    .catch(err => {
      // Handle errors during fetch
      console.error('Error fetching scholarships:', err);
      setError('Failed to load scholarships.');
      setLoading(false); // Stop loading in case of error
    });
};

