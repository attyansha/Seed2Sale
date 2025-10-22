import React from 'react';
import { useParams, Link } from 'react-router-dom';

const vendors = [
  {
    id: '1',
    name: "Suresh's Organic Farm",
    description: "Certified organic vegetables from Punjab, practicing sustainable farming.",
    products: ['Spinach', 'Radish', 'Tomato', 'Carrots'],
    markets: ['Delhi Organic Market - Sat & Sun'],
    image: 'https://imgs.search.brave.com/QE3puANoASjRNraQe99NepwGM5FsLg2nNGBwXtkqQCw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzI3LzgxLzMw/LzM2MF9GXzYyNzgx/MzA5Ml9Ua1hINWZn/ajl1WEh3UDRuWDBi/SUVVaXNuU1JmREpB/Ri5qcGc',
    phone: '+91 98765 43210',
    email: 'suresh@organicfarm.com',
    location: 'Punjab, India',
    established: '1995',
    specialties: ['Organic', 'Sustainable', 'Pesticide-Free']
  },
  {
    id: '2',
    name: "Anjali's Artisan Breads",
    description: "Baking traditional breads using ancient Indian grains.",
    products: ['Millet Bread', 'Wheat Roti', 'Multigrain Loaf'],
    markets: ['Mumbai Farmers Market - Sunday'],
    image: 'https://imgs.search.brave.com/mp1ean7bRa2XZYW2Yf3sz1ZDl1RrNGkSmwd3l5WumAk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci82MjQv/NDQ2L0hELXdhbGxw/YXBlci1iYWtlcnkt/c3RvcmUtYnVpbGRp/bmctYmFrZXJ5LXN0/b3JlLXNob3AtdGh1/bWJuYWlsLmpwZw',
    phone: '+91 87654 32109',
    email: 'anjali@artisanbreads.com',
    location: 'Mumbai, India',
    established: '2010',
    specialties: ['Artisan', 'Traditional', 'Handmade']
  },
  {
    id: '3',
    name: "Ravi's Herbal Garden",
    description: "Medicinal herbs and aromatic plants grown naturally.",
    products: ['Tulsi', 'Neem', 'Aloe Vera', 'Mint'],
    markets: ['Chennai Green Bazaar - Saturdays'],
    image: 'https://imgs.search.brave.com/l-aTQYLYViDCboKFkS72Z4WsZne7BLin4HTgFpqOgiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW1l/ZHlnYXJkZW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzAxL3Nob3Atdmll/dy5qcGc',
    phone: '+91 76543 21098',
    email: 'ravi@herbalgarden.com',
    location: 'Chennai, India',
    established: '2015',
    specialties: ['Medicinal', 'Natural', 'Aromatic']
  },
  {
    id: '4',
    name: "Meera's Mango Orchard",
    description: "Seasonal mango varieties from Maharashtra.",
    products: ['Alphonso Mango', 'Kesar Mango', 'Langra Mango'],
    markets: ['Kolkata Fresh Market - Fri-Sun'],
    image: 'https://imgs.search.brave.com/6fLynDOS7EF8snvlPaf10mqdQyM_dsi1DW9TZWOekII/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE0LzM5LzgxLzcy/LzM2MF9GXzE0Mzk4/MTcyNTlfcWFhQnZM/ajhzOTUwelJrMFh2/VlFpclM1Y0xhb3pl/b2cuanBn',
    phone: '+91 65432 10987',
    email: 'meera@mangoorchard.com',
    location: 'Maharashtra, India',
    established: '2000',
    specialties: ['Seasonal', 'Premium', 'Export Quality']
  },
  {
    id: '5',
    name: "Kumar's Spice Stall",
    description: "High-quality spices and blends from Kerala.",
    products: ['Turmeric', 'Cardamom', 'Cloves', 'Black Pepper'],
    markets: ['Bengaluru Organic Haven - Sundays'],
    image: 'https://imgs.search.brave.com/2ZJ80Opj3rjphuStDbb87ZNMvft9nb4-9R00X3mSpnw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/NjM5MzEzMC9waG90/by9jb2xvcmZ1bC1z/cGljZXMtYW5kLWhl/cmJzLW9uLWRpc3Bs/YXktaW4tdGhlLXNv/dWsuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVNrTENMaFc1/SjJFU0J1RWRxc2pR/SUo3dEZRWmllTHdy/azJjTl9ybUVmcm89',
    phone: '+91 54321 09876',
    email: 'kumar@spicestall.com',
    location: 'Kerala, India',
    established: '1985',
    specialties: ['Authentic', 'High Quality', 'Traditional Blends']
  },
  {
    id: '6',
    name: "Pooja's Flower Nursery",
    description: "Fresh flower bouquets and plants from Hyderabad.",
    products: ['Marigold', 'Jasmine', 'Rose', 'Bougainvillea'],
    markets: ['Hyderabad Farmers Hub - Weekends'],
    image: 'https://imgs.search.brave.com/8VY8hCZN9RQK5pO2GVY2g__oscQBqc9JwGJL4uunPiE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzcyLzc4LzI0/LzM2MF9GXzExNzI3/ODI0ODBfSFpyOFkx/ZXlDMXllWUwyaFJ4/UHNUbHlpQjNHZjdK/Rk0uanBn',
    phone: '+91 43210 98765',
    email: 'pooja@flowernursery.com',
    location: 'Hyderabad, India',
    established: '2012',
    specialties: ['Fresh Flowers', 'Plants', 'Bouquets']
  },
  {
    id: '7',
    name: "Dinesh's Local Honey",
    description: "Pure honey from Sahyadri hills.",
    products: ['Wildflower Honey', 'Eucalyptus Honey'],
    markets: ['Ahmedabad Local Market - Saturdays'],
    image: 'https://imgs.search.brave.com/ydRW0aGg9f0UxQLrC4SZFhNW_Ivpg2QD62N8VmJM-us/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oNy5h/bGFteS5jb20vY29t/cC9CRk05NTAvc2hv/cC1zZWxsaW5nLWxv/Y2FsLXdpbmUtYW5k/LWhvbmV5LW1lbG5p/ay1idWxnYXJpYS1C/Rk05NTAuanBn',
    phone: '+91 32109 87654',
    email: 'dinesh@localhoney.com',
    location: 'Maharashtra, India',
    established: '2008',
    specialties: ['Pure Honey', 'Natural', 'Hills Sourced']
  },
  {
    id: '8',
    name: "Sneha's Fresh Dairy",
    description: "Farm-fresh milk and dairy from Pune.",
    products: ['Milk', 'Paneer', 'Ghee', 'Curd'],
    markets: ['Pune Green Market - Sundays'],
    image: 'https://media.istockphoto.com/id/2178111666/photo/variety-of-dairy-products-on-the-table-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=2-bpx_tB6xK-XZQ5u4cBNtHD7AMb0enZvv0iQM5AXLw="',
    phone: '+91 21098 76543',
    email: 'sneha@freshdairy.com',
    location: 'Pune, India',
    established: '2005',
    specialties: ['Farm Fresh', 'Dairy Products', 'Organic']
  },
  {
    id: '9',
    name: "Arjun's Fresh Fish",
    description: "Locally caught fish and seafood from Jaipur coast.",
    products: ['Pomfret', 'Hilsa', 'Rohu', 'Prawns'],
    markets: ['Jaipur Fresh Plaza - Weekends'],
    image: 'https://imgs.search.brave.com/XpWG4mdWE1IwHPq3EAQBUCBRpD7EfkfdPbzK5r4ch5Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzQ4LzgyLzQz/LzM2MF9GXzI0ODgy/NDM0OV9INUlmSXVB/dWpwTlFwRFVmWmo0/enRJR3hRTGVMV1VM/ZC5qcGc',
    phone: '+91 10987 65432',
    email: 'arjun@freshfish.com',
    location: 'Coastal Region, India',
    established: '2018',
    specialties: ['Fresh Fish', 'Seafood', 'Daily Catch']
  },
  {
    id: '10',
    name: "Lakshmi's Traditional Sweets",
    description: "Homemade Indian sweets from Lucknow.",
    products: ['Gulab Jamun', 'Rasgulla', 'Peda', 'Jalebi'],
    markets: ['Lucknow Farmers Market - Sundays'],
    image: 'https://imgs.search.brave.com/DJemwwdWtKRQ9cixySCIB0mmqdXF1l6N0xiF3dnxIZg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2LzQ1LzA2LzA0/LzM2MF9GXzE2NDUw/NjA0NThfTTJhdE9s/cmtITGtwN1JOeGR4/S2JHV0hyOHRST05u/NU8uanBn',
    phone: '+91 09876 54321',
    email: 'lakshmi@traditionalsweets.com',
    location: 'Lucknow, India',
    established: '1990',
    specialties: ['Traditional', 'Homemade', 'Authentic Recipes']
  },
];

function VendorProfile() {
  const { id } = useParams();
  const vendor = vendors.find(v => v.id === id);

  if (!vendor) {
    return (
      <div className="container mt-5 text-center">
        <h2>Vendor not found</h2>
        <p>The vendor profile you're looking for doesn't exist.</p>
        <Link to="/vendors" className="btn btn-primary rounded-12">
          Back to Vendors
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="vendor-profile-page">
        <div className="container">
          {/* Back Navigation */}
          <div className="breadcrumb-nav mb-4">
            <Link to="/vendors" className="me-3">
              <i className="fas fa-arrow-left me-2"></i>Back to Vendors
            </Link>
            <span className="text-muted">/ {vendor.name}</span>
          </div>
        </div>

        <div className="vendor-profile-page">
          <div className="container mt-4">

            {/* Header Section */}
            <div className="row g-4 mb-5">
              <div className="col-lg-5">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-100 rounded-12 shadow-soft vendor-main-image" />
              </div>
              <div className="col-lg-7">
                <div className="vendor-info-section">
                  <h1 className="section-title mb-3">{vendor.name}</h1>
                  <p className="lead mb-3">{vendor.description}</p>

                  {/* Location & Market */}
                  <div className="vendor-details mb-4">
                    <p className="mb-2">
                      <i className="fas fa-map-marker-alt text-success me-2"></i>
                      <strong>Location:</strong> {vendor.location}
                    </p>
                    <p className="mb-2">
                      <i className="fas fa-calendar text-success me-2"></i>
                      <strong>Established:</strong> {vendor.established}
                    </p>
                    <div className="mb-3">
                      <span className="fmh-badge market-badge">
                        <i className="fas fa-store me-2"></i>
                        {vendor.markets[0]}
                      </span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h5 className="mb-2">Specialties:</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {vendor.specialties && vendor.specialties.map((specialty, idx) => (
                        <span key={idx} className="badge bg-success specialty-badge">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="vendor-actions">
                    <a
                      href={`tel:${vendor.phone}`}
                      className="btn btn-primary rounded-12 me-3 mb-2"
                    >
                      <i className="fas fa-phone me-2"></i>Call Vendor
                    </a>
                    <a
                      href={`mailto:${vendor.email}`}
                      className="btn btn-outline-primary rounded-12 me-3 mb-2"
                    >
                      <i className="fas fa-envelope me-2"></i>Email
                    </a>
                    <button className="btn btn-outline-success rounded-12 mb-2">
                      <i className="fas fa-heart me-2"></i>Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-4" />

            {/* Products Section */}
            <div className="row">
              <div className="col-lg-8">
                <section className="mb-5">
                  <h3 className="section-subtitle mb-4">
                    <i className="fas fa-leaf text-success me-2"></i>
                    Our Products
                  </h3>
                  <div className="row">
                    {vendor.products.map((product, idx) => (
                      <div key={idx} className="col-md-6 col-lg-4 mb-3">
                        <div className="product-card">
                          <div className="product-icon">
                            <i className="fas fa-seedling"></i>
                          </div>
                          <h6 className="product-name">{product}</h6>
                          <span className="availability-badge">Available</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Contact Sidebar */}
              <div className="col-lg-4">
                <div className="contact-card">
                  <h5 className="mb-3">
                    <i className="fas fa-address-card text-success me-2"></i>
                    Contact Information
                  </h5>
                  <div className="contact-item">
                    <i className="fas fa-phone text-success"></i>
                    <div>
                      <strong>Phone</strong>
                      <p className="mb-0">
                        <a href={`tel:${vendor.phone}`}>{vendor.phone}</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope text-success"></i>
                    <div>
                      <strong>Email</strong>
                      <p className="mb-0">
                        <a href={`mailto:${vendor.email}`}>{vendor.email}</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt text-success"></i>
                    <div>
                      <strong>Location</strong>
                      <p className="mb-0">{vendor.location}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="quick-actions-card mt-4">
                  <h6 className="mb-3">Quick Actions</h6>
                  <Link to="/market" className="btn btn-outline-primary w-100 mb-2 rounded-12">
                    <i className="fas fa-map me-2"></i>Find This Market
                  </Link>
                  <Link to="/vendors" className="btn btn-outline-secondary w-100 rounded-12">
                    <i className="fas fa-users me-2"></i>Browse All Vendors
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VendorProfile;
