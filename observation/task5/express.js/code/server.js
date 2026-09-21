// Express.js Student Server
const express = require('express');
const app = express();
const PORT = 3000;
// Sample list of at least five students
const students = [
  { id: 1, name: 'Aarav Sharma', course: 'Full Stack Web Development', year: 2 },
  { id: 2, name: 'Diya Patel', course: 'Data Science', year: 3 },
  { id: 3, name: 'Rohan Mehta', course: 'Full Stack Web Development', year: 2 },
  { id: 4, name: 'Sneha Reddy', course: 'Artificial Intelligence', year: 1 },
  { id: 5, name: 'Kabir Nair', course: 'Cyber Security', year: 4 },
  { id: 6, name: 'Ishita Rao', course: 'Full Stack Web Development', year: 2 }
];
// Route 1: Home route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Student Management Server</h1><p>Visit /students or /about</p>');
});
// Route 2: Students route - returns list of students
app.get('/students', (req, res) => {
  res.json(students);
});
// Route 3: About route - application information
app.get('/about', (req, res) => {
  res.send(
    '<h2>About This Application</h2>' +
    '<p>This is a basic Express.js server built for Task 7 of the Full Stack Web Development ' +
    'course. It demonstrates routing using the GET HTTP method with three endpoints: ' +
    '/, /students and /about.</p>'
  );
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})