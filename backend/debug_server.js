const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 5001; // Use a different port

app.use(express.json());

// Test basic server
app.get('/', (req, res) => {
  res.json({ message: 'Debug server working' });
});

// Test routes one by one
console.log('Testing auth routes...');
try {
  const authRoutes = require('./services/routes/auth');
  app.use('/api/auth', authRoutes);
  console.log('✅ Auth routes loaded successfully');
} catch (error) {
  console.error('❌ Auth routes failed:', error.message);
}

console.log('Testing vendor routes...');
try {
  const vendorRoutes = require('./services/routes/vendor');
  app.use('/api/vendor', vendorRoutes);
  console.log('✅ Vendor routes loaded successfully');
} catch (error) {
  console.error('❌ Vendor routes failed:', error.message);
}

console.log('Testing markets routes...');
try {
  const marketsRoutes = require('./services/routes/markets');
  app.use('/api/markets', marketsRoutes);
  console.log('✅ Markets routes loaded successfully');
} catch (error) {
  console.error('❌ Markets routes failed:', error.message);
}

app.listen(PORT, () => {
  console.log(`🔧 Debug server running on port ${PORT}`);
});