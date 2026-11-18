// Usage: npm run seed   (requires MONGODB_URI in .env)
require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('../models/Student');

const students = [
  { regNo: 'A24126552114', name: 'R.B.Abhiram',   branch: 'CSM (CSE - AI & ML)', section: 'B', cgpa: 9.0 },
  { regNo: 'A24126552115', name: 'R. Varshini',   branch: 'CSM (CSE - AI & ML)', section: 'B', cgpa: 8.9 },
  { regNo: 'A24126552116', name: 'S. Jayavanth',  branch: 'CSM (CSE - AI & ML)', section: 'B', cgpa: 9.1 },
  { regNo: 'A24126552117', name: 'S. Deekshitha', branch: 'CSM (CSE - AI & ML)', section: 'B', cgpa: 9.3 },
];

(async () => {
  await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
  await Student.deleteMany({});
  await Student.insertMany(students);
  console.log(`Seeded ${students.length} students`);
  await mongoose.disconnect();
})().catch((e) => { console.error(e.message); process.exit(1); });
