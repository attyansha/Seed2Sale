import React from 'react';

function GoogleMapEmbed({ coordinates, name, location }) {
  if (!coordinates) return null;

  // Generate the Google Maps embed URL
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${coordinates.lat},${coordinates.lng}&zoom=15`;
  
  // Alternative: Use this URL format that doesn't require an API key (but has limitations)
  const fallbackUrl = `https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="mt-4 mb-4">
      <h4 className="mb-3">Location Map</h4>
      <div 
        className="map-container"
        style={{ 
          height: '300px', 
          borderRadius: '12px', 
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <iframe
          title={`Map showing ${name} location`}
          src={fallbackUrl} // Use embedUrl if you have an API key
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="text-muted mt-2 small">
        📍 {location} • Click map to open in Google Maps
      </p>
    </div>
  );
}

export default GoogleMapEmbed;
