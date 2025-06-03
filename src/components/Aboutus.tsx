import aboutImage from "/about.jpg";
import "../css/about.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-image-wrapper">
              <img
                src={aboutImage}
                alt="Modern Office Space"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="about-title">Who We Are</h2>
              <p>
                Founded in 2025 in Ahmedabad, Gujarat, Ray Tech
                Pvt. Ltd. is dedicated to empowering businesses through
                high-quality, tailored digital services.
              </p>

              <blockquote className="blockquote quote-container ">
                <p>"We don't just meet expectations — we strive to exceed them."</p>
                <footer className="blockquote-footer">Bhargav Solanki</footer>
              </blockquote>

              <ul className="list-unstyled">
                <li>
                  <span>✓</span>
                  <span>Focus on creativity, precision, and client success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}