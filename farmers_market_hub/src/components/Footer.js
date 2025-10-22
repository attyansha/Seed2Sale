import React from 'react';

function Footer() {
  return (
    <footer className="fmh-footer">
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2">
        <span>© 2025 FarmersMarketHub. All rights reserved.</span>
        <div className="d-flex gap-3">
          <a href="#" className="fmh-footer-link">Privacy</a>
          <a href="#" className="fmh-footer-link">Terms</a>
          <a href="#" className="fmh-footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

