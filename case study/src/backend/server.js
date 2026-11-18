require('dotenv').config(); // Used locally; Render injects runtime env directly
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/students');

const app = express();
app.set('trust proxy', 1); // Required behind Render's TLS reverse proxy

// CORS must be registered BEFORE routes
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Explicit preflight handling
app.use(helmet());
app.use(express.json());

app.use('/api', studentRoutes);

// Generic error handler
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.message);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
  });
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    // Bind 0.0.0.0 (not 127.0.0.1) so Render's proxy can reach the container
    app.listen(PORT, '0.0.0.0', () => console.log(`API live on 0.0.0.0:${PORT}`));
  })
  .catch((err) => {
    console.error('[DB] Connection failed:', err.message);
    process.exit(1);
  });
