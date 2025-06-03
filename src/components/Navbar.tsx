import { useState } from "react";
import logo from "/logo-with-tagline.png";
import "../css/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* <a className="navbar-brand" href="#home">
            <img src={logo} alt="Ray Tech Logo" width="40" height="40" />
            <span>Ray Tech</span>
          </a> */}

          <a className="navbar-brand" href="#home">
            <img src={logo} alt="Ray Tech Logo" width="250" height="40" />

          </a>
          <button
            className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
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
        </div>
      </nav>
    </div>
  );
}