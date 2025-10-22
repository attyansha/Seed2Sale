# 🌾 Seed2Sale

A full-stack farmers market platform connecting local farmers directly with consumers across India. Built with modern technologies and deployed to production.

## 🚀 Live Demo

- **Frontend**: [https://seed2-sale-6d3kah5le-attyanshasingh-4945s-projects.vercel.app](https://seed2-sale-6d3kah5le-attyanshasingh-4945s-projects.vercel.app)
- **Backend API**: [https://seed2sale-production.up.railway.app](https://seed2sale-production.up.railway.app)
- **API Health Check**: [https://seed2sale-production.up.railway.app/health](https://seed2sale-production.up.railway.app/health)

## 📋 Features

### ✅ Implemented
- **User Authentication** - Secure registration and login with JWT
- **Market Discovery** - Browse farmers markets across India
- **Vendor Profiles** - View local farmers and artisans
- **Responsive Design** - Mobile-first Bootstrap UI
- **Real-time Data** - Live MongoDB Atlas database
- **Production Ready** - Full DevOps CI/CD pipeline

### 🎯 Core Functionality
- User registration and authentication
- Market listings with details
- Vendor information and profiles
- Seasonal produce guide
- Community engagement platform

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI framework
- **Bootstrap 5** - Responsive design
- **React Router** - Client-side routing
- **Vercel** - Production deployment

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Railway** - Production deployment

### DevOps & Infrastructure
- **GitHub Actions** - CI/CD pipeline
- **Docker** - Containerization
- **MongoDB Atlas** - Database hosting
- **Environment Variables** - Secure configuration

## 🏗️ Project Structure
Seed2Sale/
├── .github/workflows/ # CI/CD Pipeline
│ └── deploy.yml
├── backend/ # Node.js API
│ ├── config/
│ │ └── database.js
│ ├── services/routes/
│ │ ├── auth.js
│ │ ├── markets.js
│ │ └── vendor.js
│ ├── models/ # Database models
│ ├── Dockerfile # Container configuration
│ ├── package.json
│ └── server.js
├── farmers_market_hub/ # React Frontend
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ │ ├── NavBar.js
│ │ │ ├── Footer.js
│ │ │ ├── MarketCard.js
│ │ │ └── VendorCard.js
│ │ ├── pages/ # Application pages
│ │ │ ├── Home.js
│ │ │ ├── Market.js
│ │ │ ├── Vendors.js
│ │ │ ├── Auth.js
│ │ │ └── ...
│ │ └── App.js
│ └── package.json
└── README.md