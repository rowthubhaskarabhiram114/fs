// File location: C:/projects/app/server.js

console.log(__dirname); 
// Output: "C:\projects\app"

// Commonly paired with path module to build safe file paths
const path = require('path');
const configPath = path.join(__dirname, 'config', 'settings.json');

console.log(configPath);
// Output: "C:\projects\app\config\settings.json"
