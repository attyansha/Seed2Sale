import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Import pages
import Home from './Pages/Home';
import Market from './Pages/Market';
import Vendors from './Pages/Vendors';
import VendorProfile from './Pages/VendorProfile';
import Produce from './Pages/Produce';
import Community from './Pages/Community';
import Login from './Pages/Login';
import Signup from './Pages/signup';

function App() {
  return (
    <Router>
      <NavBar />
      <main className="container mt-4 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/vendor/:id" element={<VendorProfile />} />
          <Route path="/produce" element={<Produce />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Optional: Add a 404 page route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

