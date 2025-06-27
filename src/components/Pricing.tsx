import { BsCheckCircleFill } from 'react-icons/bs';
import '../css/pricing.css';

export interface PricingPackage {
  name: string;
  price: string;
  usdPrice: string;
  features: string[];
  featured?: boolean;
  badgeText?: string;
}

interface PricingProps {
  packages: PricingPackage[];
  heading?: string;
  note?: string;
}

const Pricing = ({ packages, heading = 'Packages', note = 'Final pricing may vary depending on specific client requirements.' }: PricingProps) => {
  return (
    <section className="pricing-section">
      <div className="custom-container">
        <h2 className="section-title">{heading}</h2>
        <p className="section-subtitle">We offer tailored pricing to meet varying business needs:</p>
        
        <div className="row g-4 justify-content-center">
          {packages.map((pkg) => (
            <div key={pkg.name} className="col-12 col-md-6 col-lg-4">
              <div className={`pricing-card${pkg.featured ? ' featured' : ''}`}> 
                {pkg.featured && pkg.badgeText && (
                  <div className="popular-badge">{pkg.badgeText}</div>
                )}
                <div className="pricing-header">
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="price">
                    <span className="currency">₹</span>
                    <span className="amount">{pkg.price}</span>
                    <span className="usd-price">{pkg.usdPrice}</span>
                  </div>
                </div>
                <ul className="features-list">
                  {pkg.features.map((feature, i) => (
                    <li key={i}><BsCheckCircleFill className="check-icon" />{feature}</li>
                  ))}
                </ul>
                {/* <button className="pricing-btn">Get Started</button> */}
              </div>
            </div>
          ))}
        </div>

        <p className="pricing-note">Note: {note}</p>
      </div>
    </section>
  );
};

export default Pricing; 