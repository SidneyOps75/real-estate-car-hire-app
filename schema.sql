-- Users table for authentication
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Properties table
CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(200) NOT NULL,
  rent DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) NOT NULL, -- available, leased, etc.
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cars table
CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  model VARCHAR(100) NOT NULL,
  plate VARCHAR(20) UNIQUE NOT NULL,
  rate DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) NOT NULL, -- available, booked, etc.
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Leases table for property rentals
CREATE TABLE leases (
  id SERIAL PRIMARY KEY,
  property_id INTEGER REFERENCES properties(id),
  user_id INTEGER REFERENCES users(id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) NOT NULL, -- active, terminated, etc.
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookings table for car rentals
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  car_id INTEGER REFERENCES cars(id),
  user_id INTEGER REFERENCES users(id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) NOT NULL, -- confirmed, completed, cancelled, etc.
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);