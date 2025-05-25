// backend/routes/property.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all properties
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM properties');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a property
router.post('/', async (req, res) => {
  const { name, location, rent, status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO properties (name, location, rent, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, location, rent, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
