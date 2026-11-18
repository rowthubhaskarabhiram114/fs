const express = require('express');
const mongoose = require('mongoose');
const Student = require('../models/Student');

const router = express.Router();

// GET /api/health — readiness probe
router.get('/health', (req, res) => {
  const db = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.status(db === 'connected' ? 200 : 503).json({ status: 'ok', database: db });
});

// GET /api/students — list all student records
router.get('/students', async (req, res, next) => {
  try {
    const data = await Student.find({}, 'regNo name branch section cgpa')
      .sort({ regNo: 1 })
      .lean();
    res.status(200).json({ success: true, count: data.length, data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
