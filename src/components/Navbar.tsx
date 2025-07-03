import { useState } from "react";
import { MdMenu } from "react-icons/md";
import logo from "/logo-with-tagline.png";
import "../css/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (link: string) => {
    setActiveLink(link);
    closeMenu();
  };

  return (
    <>
      <div className="header-container">
        <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center">
          <div className="navbar-brand-container">
            {/* <a className="navbar-brand" href="#home">
              <img src={logo} alt="Ray Tech Logo" width="40" height="40" />
              <span>Ray Tech</span>
            </a> */}

            <a className="navbar-brand" href="/">
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
                  className={`nav-link${activeLink === "Home" ? " active" : ""}`}
                  href="/"
                  onClick={() => handleNavClick("Home")}
                >
                  Home
                </a>
              </li>
              {/* Only show these anchors on home page, so keep as is */}
                  <li className="nav-item">
                    <a
                      className={`nav-link${activeLink === "About" ? " active" : ""}`}
                      href="#about"
                      onClick={() => handleNavClick("About")}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link${activeLink === "Services" ? " active" : ""}`}
                      href="#services"
                      onClick={() => handleNavClick("Services")}
                    >
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link${activeLink === "Why Us" ? " active" : ""}`}
                      href="#why-us"
                      onClick={() => handleNavClick("Why Us")}
                    >
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link${activeLink === "Contact" ? " active" : ""}`}
                      href="#contact"
                      onClick={() => handleNavClick("Contact")}
                    >
                      Contact
                    </a>
                  </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* Blur overlay - moved outside navbar */}
      {/*
      <div 
        className={`blur-overlay ${isOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>
      */}
    </>
  );
}