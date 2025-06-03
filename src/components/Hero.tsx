import "../css/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="custom-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Your Gateway to Digital Excellence!</h1>
            <p>
              We don't just create technology – we create transformations.
              Partner with us to build innovative digital solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Let's Talk</button>
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
