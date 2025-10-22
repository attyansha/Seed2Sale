const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
require('dotenv').config();

// Import database connection
const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// ========================
// DATABASE CONNECTION
// ========================
connectDB();

// ========================
// MIDDLEWARE
// ========================
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.CLIENT_URL] 
    : ['http://localhost:3000'],
  credentials: true
}));
app.use(compression());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ========================
// HEALTH CHECK ENDPOINTS
// ========================
app.get('/', (req, res) => {
  res.json({ 
    message: 'FarmersMarketHub API is running! 🌾',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: 'MongoDB Atlas'
  });
});

app.get('/health', (req, res) => {
  const mongoose = require('mongoose');
  const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
  res.status(200).json({ 
    status: 'OK', 
    database: dbStatus,
    timestamp: new Date().toISOString() 
  });
});

// ========================
// TEST ENDPOINTS
// ========================
app.get('/api/test', (req, res) => {
  res.json({ message: 'Direct test route is working!' });
});

// ========================
// API ROUTES WITH ERROR HANDLING
// ========================

// Auth Routes
try {
  const authRoutes = require('./services/routes/auth');
  app.use('/api/auth', authRoutes);
  console.log('✅ Auth routes loaded successfully');
} catch (error) {
  console.error('❌ Failed to load auth routes:', error.message);
}

// Vendor Routes
try {
  const vendorRoutes = require('./services/routes/vendor');
  app.use('/api/vendor', vendorRoutes);
  console.log('✅ Vendor routes loaded successfully');
} catch (error) {
  console.error('❌ Failed to load vendor routes:', error.message);
}

// Markets Routes
try {
  const marketsRoutes = require('./services/routes/markets');
  app.use('/api/markets', marketsRoutes);
  console.log('✅ Markets routes loaded successfully');
} catch (error) {
  console.error('❌ Failed to load markets routes:', error.message);
}

// ========================
// ERROR HANDLING MIDDLEWARE
// ========================
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler - MUST BE LAST
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ========================
// START SERVER
// ========================
app.listen(PORT, () => {
  console.log(`🚀 FarmersMarketHub API running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📍 Database: MongoDB Atlas`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`📍 API Test: http://localhost:${PORT}/api/test`);
});