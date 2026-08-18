// Basic usage: Runs every 2000ms (2 seconds)
const intervalId = setInterval(() => {
  console.log("This message logs every 2 seconds");
}, 2000);

// Stopping the interval after a counter reaches a limit
let count = 0;
const timer = setInterval(() => {
  count++;
  console.log(`Execution count: ${count}`);

  if (count === 5) {
    clearInterval(timer); // Stops the loop after 5 executions
    console.log("Interval stopped.");
  }
}, 1000);
