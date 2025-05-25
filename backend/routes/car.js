// backend/routes/car.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all cars
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cars');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a car
router.post('/', async (req, res) => {
  const { model, plate, rate, status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO cars (model, plate, rate, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [model, plate, rate, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
