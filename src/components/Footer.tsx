import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logoWithTagline from "/logo-with-tagline.png";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="custom-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logoWithTagline} alt="Ray Tech - Where Innovation Meets Success" className="footer-logo-with-tagline" />
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Ray Tech Pvt. Ltd. © 2025 — All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 