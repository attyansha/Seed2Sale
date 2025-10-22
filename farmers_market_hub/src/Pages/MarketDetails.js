import React from 'react';
import { useParams, Link } from 'react-router-dom';
import GoogleMapEmbed from '../components/GoogleMapEmbed';

const markets = [
  { id: 1, name: 'Delhi Organic Market', location: 'Connaught Place, Delhi', coordinates: { lat: 28.6139, lng: 77.209}, hours: 'Sat & Sun 8am-4pm', vendors: 25, image: 'https://imgs.search.brave.com/6E6egvWpGhVe1VsbmrBr7f1YsX3267ke1zCJFivZ4T4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbmFj/a2ZheC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMTIv/RGVsaGlpdGVzLTEu/anBn', description: 'A bustling weekend market featuring certified organic produce, artisan foods, and live music.' },
  { id: 2, name: 'Mumbai Farmers Market', location: 'Bandra West, Mumbai', coordinates: { lat: 19.0632, lng: 72.8347 }, hours: 'Sunday 9am-3pm', vendors: 30, image: 'https://images.unsplash.com/photo-1469194972680-73debae5f19b?auto=format&fit=crop&w=1200&q=60', description: 'Seasonal fruits, breads, cheeses, and handcrafted products from local makers.' },
  { id: 3, name: 'Chennai Green Bazaar', location: 'T Nagar, Chennai', coordinates: { lat: 13.0358, lng: 80.2332 }, hours: 'Saturdays 7am-1pm', vendors: 18, image: 'https://images.unsplash.com/photo-1564643865889-c22490909fd0?auto=format&fit=crop&w=1200&q=60', description: 'Community-focused market with pesticide-free greens and heirloom varieties.' },
  { id: 4, name: 'Kolkata Fresh Market', location: 'Salt Lake, Kolkata', coordinates: { lat: 22.5697, lng: 88.3699 }, hours: 'Fri-Sun 8am-2pm', vendors: 22, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=60', description: 'Fresh fish, vegetables, and regional delicacies straight from small producers.' },
  { id: 5, name: 'Bengaluru Organic Haven', location: 'Indiranagar, Bengaluru', coordinates: { lat: 12.9716, lng: 77.5946 }, hours: 'Sundays 8am-2pm', vendors: 20, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60', description: 'Curated stalls with organic staples, cold-pressed oils, and natural body care.' },
  { id: 6, name: 'Hyderabad Farmers Hub', location: 'Hitech City, Hyderabad', coordinates: { lat: 17.385, lng: 78.4867 }, hours: 'Sat & Sun 9am-3pm', vendors: 15, image: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=1200&q=60', description: 'Family-friendly hub known for honey, sprouts, and millet-based snacks.' },
  { id: 7, name: 'Ahmedabad Local Market', location: 'Maninagar, Ahmedabad', coordinates: { lat: 23.0225, lng: 72.5714 }, hours: 'Sat 7am-12pm', vendors: 10, image: 'https://images.unsplash.com/photo-1468197963149-5f7ffe1e4e7f?auto=format&fit=crop&w=1200&q=60', description: 'Small but lively—perfect for weekly veg baskets and spice refills.' },
  { id: 8, name: 'Pune Green Market', location: 'Koregaon Park, Pune', coordinates:{ lat: 18.5204, lng: 73.8567 }, hours: 'Sunday 8am-1pm', vendors: 18, image: 'https://images.unsplash.com/photo-1468476396571-dccdb8e3cecc?auto=format&fit=crop&w=1200&q=60', description: 'Shaded aisles with sourdough, microgreens, and single-origin coffee.' },
  { id: 9, name: 'Jaipur Fresh Plaza', location: 'C-Scheme, Jaipur', coordinates: { lat: 26.9124, lng: 75.7873 }, hours: 'Sat-Sun 7am-2pm', vendors: 14, image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60', description: 'Colorful produce, local pickles, and traditional sweets.' },
  { id: 10, name: 'Lucknow Farmers Market', location: 'Hazratganj, Lucknow', coordinates: { lat: 26.8467, lng: 80.9462 }, hours: 'Sunday 8am-2pm', vendors: 16, image: 'https://images.unsplash.com/photo-1473812171470-995858d2410d?auto=format&fit=crop&w=1200&q=60', description: 'Friendly community market with seasonal mango fests and flower stalls.' },
];

const mockVendors = [
  { id: 'v1', name: 'GreenLeaf Organics', category: 'Vegetables' },
  { id: 'v2', name: 'Spice Route', category: 'Spices' },
  { id: 'v3', name: 'Honey Hills', category: 'Honey' },
  { id: 'v4', name: 'Artisan Breads Co.', category: 'Bakery' },
  { id: 'v5', name: 'Millet Mill', category: 'Grains' },
];

export default function MarketDetails() {
  const { id } = useParams();
  const marketId = Number(id);
  const market = markets.find(m => m.id === marketId);

  if (!market) {
    return (
      <div className="py-5">
        <h2>Market not found</h2>
        <p>Try browsing all markets.</p>
        <Link to="/market" className="btn btn-outline-primary fmh-cta">Back to Markets</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Banner */}
      {/* <div
        className="rounded-12 shadow-soft mb-4"
        style={{
          background: `linear-gradient(0deg, rgba(0,0,0,.35), rgba(0,0,0,.35)), url('${market.image}') center/cover no-repeat`,
          height: 260
        }}
      /> */}

      {/* Heading + meta */}
      <div className="d-flex flex-wrap align-items-start gap-3 mb-3">
        <div className="flex-grow-1">
          <h2 className="section-title mb-1">{market.name}</h2>
          <p className="mb-1"><strong>Location:</strong> {market.location}</p>
          <p className="mb-1"><strong>Hours:</strong> {market.hours}</p>
          <p className="mb-2"><strong>Vendors:</strong> {market.vendors}</p>
          <p className="text-muted">{market.description}</p>
        </div>
        <div className="d-flex flex-column gap-2">
          <Link to="/vendors" className="btn btn-outline-primary fmh-cta">Explore Vendors</Link>
          <a href="#getting-there" className="btn btn-outline-primary fmh-cta">Getting There</a>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-3">
        <span className="fmh-badge me-2">Organic</span>
        <span className="fmh-badge me-2">Local</span>
        <span className="fmh-badge me-2">Family‑friendly</span>
      </div>

      {/* Vendors preview */}
      <h3 className="mt-4 mb-3">Featured Vendors</h3>
      <div className="fmh-grid">
        {mockVendors.map(v => (
          <div key={v.id} className="fmh-col-4">
            <div className="card shadow-soft">
              <div className="card-body">
                <h5 className="card-title mb-1">{v.name}</h5>
                <p className="card-text text-muted">{v.category}</p>
                <Link to={`/vendor/${v.id}`} className="btn btn-outline-primary btn-sm rounded-12">
                  View Vendor
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Getting there */}
      <h3 id="getting-there" className="mt-5 mb-3">Getting There</h3>
      <p className="text-muted">Located at {market.location}. Best visited during {market.hours}. Public transport and parking available nearby.</p>

        {/* Google Maps */}
        <GoogleMapEmbed 
            coordinates={market.coordinates} 
            name={market.name} 
            location={market.location} 
        />

      <div className="mt-4">
        <Link to="/market" className="btn btn-outline-primary fmh-cta">Back to Markets</Link>
      </div>
    </div>
  );
}
