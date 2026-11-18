const mongoose = require('mongoose');

const connectDB = async () => {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is not defined');
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000, // Fail fast if Atlas firewall blocks Render
    socketTimeoutMS: 45000,
    tls: true,
  });
  console.log(`[DB] MongoDB Atlas Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
