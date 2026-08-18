    // Allocates a buffer of 10 zero-filled bytes
const buf1 = Buffer.alloc(10);

// Allocates a buffer containing a UTF-8 string
const buf2 = Buffer.from("Hello World");

// Converts buffer back to a readable string
console.log(buf2.toString()); // Outputs: "Hello World"

// Shows raw hex output
console.log(buf2); // Outputs: <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>