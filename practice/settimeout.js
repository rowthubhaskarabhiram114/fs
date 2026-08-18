// Basic usage with delay (1000ms = 1 second)
setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);

// Passing arguments to the callback function
function greet(name, role) {
  console.log(`Hello ${name}, role: ${role}`);
}

setTimeout(greet, 2000, "Alex", "Admin");

// Canceling a timeout before it runs
const timerId = setTimeout(() => {
  console.log("This will never run");
}, 5000);

clearTimeout(timerId); // Cancels execution