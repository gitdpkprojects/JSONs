import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <i className="fas fa-tint"></i>
              <span>AquaFlow Irrigation</span>
            </div>
            <p>Professional irrigation solutions for beautiful, healthy landscapes. Quality products, expert installation, and reliable service.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products">Sprinkler Heads</Link></li>
              <li><Link to="/products">Control Systems</Link></li>
              <li><Link to="/products">Valves & Fittings</Link></li>
              <li><Link to="/products">Complete Kits</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Installation</Link></li>
              <li><Link to="/services">Maintenance</Link></li>
              <li><Link to="/services">Repairs</Link></li>
              <li><Link to="/services">Consultations</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#">Installation Guide</a></li>
              <li><a href="#">Warranty Info</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 AquaFlow Irrigation. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;