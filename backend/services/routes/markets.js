const express = require('express');
const Market = require('./models/Market');  // Changed from '../../models/Market'

const router = express.Router();

// Get all markets
router.get('/', async (req, res) => {
  try {
    const markets = await Market.find({ isActive: true })
      .sort({ name: 1 });

    res.json({
      success: true,
      data: markets,
      count: markets.length
    });

  } catch (error) {
    console.error('Get markets error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch markets',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
});

// Get single market by ID
router.get('/:id', async (req, res) => {
  try {
    const market = await Market.findById(req.params.id);

    if (!market) {
      return res.status(404).json({ message: 'Market not found' });
    }

    res.json({
      success: true,
      data: market
    });

  } catch (error) {
    console.error('Get market error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch market',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
});

module.exports = router;