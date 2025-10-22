const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  businessName: {
    type: String,
    required: [true, 'Business name is required'],
    trim: true
  },
  description: String,
  location: String,
  contactInfo: {
    phone: String,
    email: String
  },
  market: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Market'
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Vendor', vendorSchema);