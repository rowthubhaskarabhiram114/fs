// File located at: C:/projects/app/server.js

console.log(__filename);
// Output: "C:\projects\app\server.js"

console.log(__dirname);
// Output: "C:\projects\app"

// Extracting just the filename or extension using the 'path' module
const path = require('path');

console.log(path.basename(__filename)); 
// Output: "server.js"

console.log(path.extname(__filename));  
// Output: ".js"
