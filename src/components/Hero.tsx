import "../css/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      <div className="custom-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Your Gateway to Digital Excellence!</h1>
            <p>
              We don't just create technology – we create transformations.
              Partner with us to build innovative digital solutions.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get Started
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let's Talk
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/hero.png"
              alt="Development team working together in modern office"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
