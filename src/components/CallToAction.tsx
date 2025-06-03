import "../css/calltoaction.css";

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="custom-container text-center">
        <h2 className="cta-title">Let's Get Started</h2>
        <p className="cta-description">
          From ambition to action – partner with experience that delivers results.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-light">Request a Quote</a>
          <a href="#contact" className="btn btn-outline-light">Contact Now</a>
        </div>
      </div>
    </section>
  );
} 