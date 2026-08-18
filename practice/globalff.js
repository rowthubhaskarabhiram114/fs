// Declare properties explicitly on the global object
global.appName = "TaskTracker";
global.maxUsers = 100;

function displayAppDetails() {
  // Accessing global variables directly without 'global.' prefix
  console.log(formatLog(`Starting ${appName}...`));
  console.log(`Maximum allowed users: ${maxUsers}`);

  // Modifying a global property inside a function scope
  global.maxUsers = 150;
}

displayAppDetails();

// Verify the global property modification outside the function
console.log(`Updated max users: ${global.maxUsers}`);