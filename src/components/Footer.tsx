import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logoWithTagline from "/logo-with-tagline.png";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="custom-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logoWithTagline} alt="Ray Tech - Where Innovation Meets Success" className="footer-logo-with-tagline" />
            <p className="company-description">
              Ray Tech is a leading IT & Digital Services company founded in 2024. 
              We specialize in delivering innovative digital solutions that drive business success.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul className="contact-list">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <p>Ray Tech Pvt. Ltd.</p>
                  <p>Ahmedabad, Gujarat, India</p>
                </div>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <div>
                  <p>+91 91576 71794</p>
                  <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <div>
                  <p>info@raytech.com</p>
                  <p>support@raytech.com</p>
                </div>
              </li>
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
          <div className="footer-bottom-content">
            <p>Ray Tech Pvt. Ltd. © 2024 — All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="/terms">Terms & Conditions</a>
              <span className="separator">|</span>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 