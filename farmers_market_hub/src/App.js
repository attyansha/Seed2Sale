import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './Pages/Home';
import Market from './Pages/Market';
import MarketDetails from './Pages/MarketDetails';
import Vendors from './Pages/Vendors';
import Produce from './Pages/Produce';
import Community from './Pages/Community';
import Auth from './Pages/Auth';
import VendorProfile from './Pages/VendorProfile';

function App() {
  return (
    <Router>
      <div className="fmh-page">
        <NavBar />


        <main className="container mt-4 mb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/market/:id" element={<MarketDetails />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/vendor/:id" element={<VendorProfile />} />
            <Route path="/produce" element={<Produce />} />
            <Route path="/community" element={<Community />} />

            {/* Combined auth page with mode toggle via ?mode=login|signup */}
            <Route path="/auth/*" element={<Auth />} />

            {/* Optional deep-links that reuse the combined page */}
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />

            {/* 404 fallback */}
            <Route
              path="*"
              element={
                <div className="py-5">
                  <h2>Page not found</h2>
                  <p>Check the URL or use the navigation above.</p>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
