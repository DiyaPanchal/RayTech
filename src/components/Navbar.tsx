import { useState } from "react";
import { MdMenu } from "react-icons/md";
import logo from "/logo-with-tagline.png";
import "../css/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center">
        <div className="navbar-brand-container">
          {/* <a className="navbar-brand" href="#home">
            <img src={logo} alt="Ray Tech Logo" width="40" height="40" />
            <span>Ray Tech</span>
          </a> */}

          <a className="navbar-brand" href="#home">
            <img src={logo} alt="Ray Tech Logo" width="250" height="40" />
          </a>
        </div>
        <button
          className={`custom-navbar-toggler ${isOpen ? "active" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <MdMenu size={28} />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#why-us"
                onClick={() => setIsOpen(false)}
              >
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Blur overlay */}
        <div className="blur-overlay"></div>
      </nav>
    </div>
  );
}