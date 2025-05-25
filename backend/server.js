// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const propertyRoutes = require('./routes/property');
const carRoutes = require('./routes/car');
const authRoutes = require('./routes/auth');
const leaseRoutes = require('./routes/lease');
const bookingRoutes = require('./routes/booking');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚗🏠 Real Estate & Car Hire API is running');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/leases', leaseRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
