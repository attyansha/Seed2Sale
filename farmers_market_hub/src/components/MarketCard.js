import React from 'react';
import { Link } from 'react-router-dom';

export default function MarketCard({ market }) {
  return (
    <div className="card shadow-soft mb-3">
      {market.image && (
        <img src={market.image} className="card-img-top" alt={market.name} />
      )}
      <div className="card-body">
        <h5 className="card-title">{market.name}</h5>
        <p className="card-text mb-2">
          <strong>Location:</strong> {market.location}<br />
          <strong>Hours:</strong> {market.hours}
        </p>
        <div className="d-flex gap-2 mb-3">
          <span className="fmh-badge">{market.vendors} vendors</span>
          <span className="fmh-badge">Open</span>
        </div>
        <div className="d-flex gap-2">
          <Link to={`/market/${market.id}`} className="btn btn-outline-primary fmh-cta btn-compact">
            View Details
          </Link>
          <Link to="/vendors" className="btn btn-outline-primary fmh-cta btn-compact">
            Explore Vendors
          </Link>
        </div>
      </div>
    </div>
  );
}
