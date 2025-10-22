require('dotenv').config();
const mongoose = require('mongoose');
const Market = require('../services/routes/models/Market');

// Connect to database
mongoose.connect(process.env.MONGODB_URI);

const sampleMarkets = [
  {
    name: "Delhi Organic Market",
    description: "A community-focused market featuring certified organic produce, artisan goods, and live music.",
    location: "Connaught Plaza, Delhi",
    operatingHours: "Sat-Sun 8am-1pm",
    contactInfo: {
      phone: "+91 9876543210",
      email: "info@delhiorganic.com"
    }
  },
  {
    name: "Mumbai Farmers Market", 
    description: "Fresh local produce directly from farmers in Maharashtra region.",
    location: "Bandra West, Mumbai",
    operatingHours: "Sunday 7am-12pm",
    contactInfo: {
      phone: "+91 9876543211",
      email: "contact@mumbaifarmers.com"
    }
  },
  {
    name: "Chennai Green Bazaar",
    description: "Traditional South Indian produce and organic products.",
    location: "Besant Nagar, Chennai", 
    operatingHours: "Sunday 6am-12pm",
    contactInfo: {
      phone: "+91 9876543212",
      email: "hello@chennaigreen.com"
    }
  }
];

const seedData = async () => {
  try {
    await Market.deleteMany();
    await Market.insertMany(sampleMarkets);
    console.log('✅ Sample markets added successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedData();