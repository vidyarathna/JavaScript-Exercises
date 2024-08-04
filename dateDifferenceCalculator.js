// Function to calculate the number of days between two dates
function calculateDateDifference(date1, date2) {
  const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
  const diffInMs = new Date(date2) - new Date(date1);
  return Math.round(diffInMs / msPerDay);
}

// Function to format a date in YYYY-MM-DD format
function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Function to handle user input
function handleUserInput() {
  // Get the first date from the user
  const startDate = prompt('Enter the start date (YYYY-MM-DD):');
  
  // Get the second date from the user
  const endDate = prompt('Enter the end date (YYYY-MM-DD):');

  // Validate the input
  if (Date.parse(startDate) && Date.parse(endDate)) {
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    const daysDifference = calculateDateDifference(startDate, endDate);
    
    alert(`Start Date: ${formattedStartDate}\nEnd Date: ${formattedEndDate}\nNumber of days between the two dates: ${daysDifference}`);
  } else {
    alert('Invalid dates. Please enter dates in the format YYYY-MM-DD.');
  }
}

// Call the function to handle user input
handleUserInput();
