// 1. Basic Output Streams
console.log("Standard output message using console.log");
console.warn("Warning output (sent to process.stderr)");
console.error("Error output (sent to process.stderr)");

// 2. Tabular Data Representation
const users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "Developer" },
  { id: 3, name: "Charlie", role: "Designer" }
];

console.log("\nDisplaying User Table:");
console.table(users);

// 3. Execution Timing
console.time("Array Processing Time");

let sum = 0;
for (let i = 0; i < 1000000; i++) {
  sum += i;
}

console.timeEnd("Array Processing Time"); // Logs the elapsed time in milliseconds

// 4. Object Inspection
const complexObject = {
  project: "NodeApp",
  config: {
    env: "production",
    ports: [8000, 8081],
    features: { auth: true, logging: true }
  }
};

console.log("\nDeep Object Inspection:");
console.dir(complexObject, { depth: null, colors: true });

// 5. Stack Trace Tracing
function processOrder() {
  console.trace("Execution stack trace inside processOrder()");
}

function checkout() {
  processOrder();
}

console.log("\nTriggering Stack Trace:");
checkout();
console.log(process.pid);
