import React from 'react';
import { Link } from 'react-router-dom';

const sampleVendors = [{ id: 1, name: "Suresh’s Organic Farm", description: "Certified organic vegetables from Punjab.", location: "Delhi Organic Market", image: "https://imgs.search.brave.com/QE3puANoASjRNraQe99NepwGM5FsLg2nNGBwXtkqQCw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzI3LzgxLzMw/LzM2MF9GXzYyNzgx/MzA5Ml9Ua1hINWZn/ajl1WEh3UDRuWDBi/SUVVaXNuU1JmREpB/Ri5qcGc" },
  { id: 2, name: "Anjali's Artisan Breads", description: "Fresh baked breads using traditional Indian grains.", location: "Mumbai Farmers Market", image: "https://imgs.search.brave.com/mp1ean7bRa2XZYW2Yf3sz1ZDl1RrNGkSmwd3l5WumAk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci82MjQv/NDQ2L0hELXdhbGxw/YXBlci1iYWtlcnkt/c3RvcmUtYnVpbGRp/bmctYmFrZXJ5LXN0/b3JlLXNob3AtdGh1/bWJuYWlsLmpwZw" },
  { id: 3, name: "Ravi’s Herbal Garden", description: "Medicinal herbs and aromatic plants grown naturally.", location: "Chennai Green Bazaar", image: "https://imgs.search.brave.com/l-aTQYLYViDCboKFkS72Z4WsZne7BLin4HTgFpqOgiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW1l/ZHlnYXJkZW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzAxL3Nob3Atdmll/dy5qcGc" },
  { id: 4, name: "Meera’s Mango Orchard", description: "Seasonal mango varieties from Maharashtra.", location: "Kolkata Fresh Market", image: "https://imgs.search.brave.com/6fLynDOS7EF8snvlPaf10mqdQyM_dsi1DW9TZWOekII/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE0LzM5LzgxLzcy/LzM2MF9GXzE0Mzk4/MTcyNTlfcWFhQnZM/ajhzOTUwelJrMFh2/VlFpclM1Y0xhb3pl/b2cuanBn" },
  { id: 5, name: "Kumar’s Spice Stall", description: "High-quality spices and blends from Kerala.", location: "Bengaluru Organic Haven", image: "https://imgs.search.brave.com/2ZJ80Opj3rjphuStDbb87ZNMvft9nb4-9R00X3mSpnw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/NjM5MzEzMC9waG90/by9jb2xvcmZ1bC1z/cGljZXMtYW5kLWhl/cmJzLW9uLWRpc3Bs/YXktaW4tdGhlLXNv/dWsuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVNrTENMaFc1/SjJFU0J1RWRxc2pR/SUo3dEZRWmllTHdy/azJjTl9ybUVmcm89" },
  { id: 6, name: "Pooja’s Flower Nursery", description: "Fresh flower bouquets and plants from Hyderabad.", location: "Hyderabad Farmers Hub", image: "https://imgs.search.brave.com/8VY8hCZN9RQK5pO2GVY2g__oscQBqc9JwGJL4uunPiE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzcyLzc4LzI0/LzM2MF9GXzExNzI3/ODI0ODBfSFpyOFkx/ZXlDMXllWUwyaFJ4/UHNUbHlpQjNHZjdK/Rk0uanBn" },
  { id: 7, name: "Dinesh’s Local Honey", description: "Pure honey from Sahyadri hills.", location: "Ahmedabad Local Market", image: "https://imgs.search.brave.com/ydRW0aGg9f0UxQLrC4SZFhNW_Ivpg2QD62N8VmJM-us/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oNy5h/bGFteS5jb20vY29t/cC9CRk05NTAvc2hv/cC1zZWxsaW5nLWxv/Y2FsLXdpbmUtYW5k/LWhvbmV5LW1lbG5p/ay1idWxnYXJpYS1C/Rk05NTAuanBn" },
  { id: 8, name: "Sneha’s Fresh Dairy", description: "Farm-fresh milk and dairy from Pune.", location: "Pune Green Market", image: "https://media.istockphoto.com/id/2178111666/photo/variety-of-dairy-products-on-the-table-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=2-bpx_tB6xK-XZQ5u4cBNtHD7AMb0enZvv0iQM5AXLw=" },
  { id: 9, name: "Arjun’s Fresh Fish", description: "Locally caught fish and seafood.", location: "Jaipur Fresh Plaza", image: "https://imgs.search.brave.com/XpWG4mdWE1IwHPq3EAQBUCBRpD7EfkfdPbzK5r4ch5Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzQ4LzgyLzQz/LzM2MF9GXzI0ODgy/NDM0OV9INUlmSXVB/dWpwTlFwRFVmWmo0/enRJR3hRTGVMV1VM/ZC5qcGc" },
  { id: 10, name: "Lakshmi’s Traditional Sweets", description: "Homemade Indian sweets from Lucknow.", location: "Lucknow Farmers Market", image: "https://imgs.search.brave.com/DJemwwdWtKRQ9cixySCIB0mmqdXF1l6N0xiF3dnxIZg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2LzQ1LzA2LzA0/LzM2MF9GXzE2NDUw/NjA0NThfTTJhdE9s/cmtITGtwN1JOeGR4/S2JHV0hyOHRST05u/NU8uanBn" },];

function VendorItem({ vendor }) {
  return (
    <div className="card shadow-soft">
      {vendor?.image && <img src={vendor.image} className="card-img-top" alt={vendor.name} />}
      <div className="card-body">
        <h5 className="card-title">{vendor.name}</h5>
        <p className="card-text">{vendor.description}</p>
        <div className="d-flex gap-2 mb-3">
          <span className="fmh-badge">{vendor.location}</span>
        </div>
        <Link to={`/vendor/${vendor.id}`} className="btn btn-outline-primary btn-sm rounded-12">View Profile</Link>
      </div>
    </div>
  );
}

export default function Vendors() {
  return (
    <div>
      <h2 className="section-title">Vendors</h2>
      <p className="section-subtitle">Discover local farmers and artisans across India.</p>

      <div className="fmh-grid">
        {sampleVendors.map(v => (
          <div className="fmh-col-4" key={v.id}>
            <VendorItem vendor={v} />
          </div>
        ))}
      </div>
    </div>
  );
}
