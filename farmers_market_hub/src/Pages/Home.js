import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="fmh-hero">
      <div className="container text-center">
        <h1 className="display-5">Fresh, Local, Sustainable</h1>
        <p className="lead">Discover farmers markets, meet artisans, and shop seasonal produce across India.</p>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <span className="fmh-badge">Organic</span>
          <span className="fmh-badge">Artisan</span>
          <span className="fmh-badge">Community</span>
        </div>
        <div className="home-button mt-4 d-flex justify-content-center gap-3">
          <Link to="/market" className="btn btn-outline-primary btn-lg fmh-cta">Find Markets</Link>
          <Link to="/vendors" className="btn btn-outline-primary btn-lg fmh-cta">Explore Vendors</Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
