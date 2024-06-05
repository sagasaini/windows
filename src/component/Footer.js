import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="site-footer" className="footer-section pt-100 pb-70">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col footer-col-4">
            <div className="footer-widget mb-30">
              <h2 className="footer-title">Follow Us</h2>
              <ul className="footer-menu">
                <li>
                  <a href="https://www.facebook.com/LotusWiindoors/" target="_blank" rel="noopener noreferrer">
                    Facebook Page: LotusWiindoors
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/lotuswiindoors" target="_blank" rel="noopener noreferrer">
                    Twitter Handle: @lotuswiindoors
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/lotuswiindoors">
                    LinkedIn Page
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col footer-col-4">
            <div className="footer-widget mb-30">
              <h2 className="footer-title">Quick Links</h2>
              <ul className="footer-menu">
                <li>
                  <a href="/project-gallery">Project Gallery</a>
                </li>
                <li>
                  <a href="#">Store Location</a>
                </li>
                <li>
                  <a href="/contact-us">Contact</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col footer-col-4">
            <div className="footer-widget mb-30">
              <h2 className="footer-title">Address</h2>
              <p>Sat Kabir glass house,</p>
              <p> add.Sai Mandir road,</p>
              <p>opp. Vasundhra Garden,</p>
              <p>near Punjab Tyre, </p>
              <p>District sonipat-131001 HARYANA.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <div className="footer-container">
          <div className="footer-copyright">
            <p>&copy; Copyright 2024 Sat Kabir</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
