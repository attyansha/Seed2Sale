import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo2.webp'; 

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fmh-bottom-nav shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
          {logo && <img src={logo} alt="Seed2Sale" height="60" className="rounded-10" />}
          <span><h1>Seed2Sale</h1></span>
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink to="/market" className="nav-link">Markets</NavLink></li>
            <li className="nav-item"><NavLink to="/vendors" className="nav-link">Vendors</NavLink></li>
            <li className="nav-item"><NavLink to="/produce" className="nav-link">Produce Guide</NavLink></li>
            <li className="nav-item"><NavLink to="/community" className="nav-link">Community</NavLink></li>
            {/* <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
            <li className="nav-item"><NavLink to="/signup" className="nav-link">Signup</NavLink></li> */}
            <li className="nav-item"><NavLink to="/auth" className="nav-link">Login/Signup</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
