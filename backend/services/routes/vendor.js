const express = require('express');
const Vendor = require('./models/Vendor');  // Changed from '../../models/Vendor'
const User = require('./models/User');      // Changed from '../../models/User'

const router = express.Router();

// Get all vendors
router.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.find()
      .populate('user', 'fullName email')
      .populate('market', 'name location')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: vendors,
      count: vendors.length
    });

  } catch (error) {
    console.error('Get vendors error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch vendors',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
});

// Get single vendor by ID
router.get('/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id)
      .populate('user', 'fullName email')
      .populate('market', 'name location');

    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    res.json({
      success: true,
      data: vendor
    });

  } catch (error) {
    console.error('Get vendor error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch vendor',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
});

module.exports = router;