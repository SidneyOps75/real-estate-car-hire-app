const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bookings');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get booking by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM bookings WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new booking
router.post('/', async (req, res) => {
  const { car_id, user_id, start_date, end_date, amount, status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO bookings (car_id, user_id, start_date, end_date, amount, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [car_id, user_id, start_date, end_date, amount, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;