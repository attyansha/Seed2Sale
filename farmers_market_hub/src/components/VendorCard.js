import React from 'react';

function VendorCard({ vendor }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{vendor.name}</h5>
        <p className="card-text">{vendor.description}</p>
        <p className="card-text"><strong>Location:</strong> {vendor.location}</p>
        <a href="#" className="btn btn-outline-primary btn-sm">View Profile</a>
      </div>
    </div>
  );
}

export default VendorCard;
