import { useParams } from 'react-router-dom';
import { BsCheckCircleFill } from 'react-icons/bs';
import '../css/pricing.css';

const Pricing = () => {
  const { serviceType } = useParams();
  
  // Convert URL parameter to readable format
  const formattedServiceType = serviceType
    ? serviceType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Development';

  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="section-title text-center">{formattedServiceType} Packages</h2>
        <p className="section-subtitle">We offer tailored pricing to meet varying business needs:</p>
        
        <div className="row g-4 justify-content-center">
          {/* Gold Package */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="package-name">GOLD</h3>
                <div className="price">
                  <span className="currency">₹</span>
                  <span className="amount">11,999</span>
                  <span className="usd-price">$ 250</span>
                </div>
              </div>
              <ul className="features-list">
                <li><BsCheckCircleFill className="check-icon" />Responsive Design</li>
                <li><BsCheckCircleFill className="check-icon" />Up to 5 Pages</li>
                <li><BsCheckCircleFill className="check-icon" />Standard UI/UX Design</li>
                <li><BsCheckCircleFill className="check-icon" />Contact Form</li>
                <li><BsCheckCircleFill className="check-icon" />Mobile-Friendly Layout</li>
                <li><BsCheckCircleFill className="check-icon" />On-Page SEO</li>
                <li><BsCheckCircleFill className="check-icon" />Social Media Links</li>
                <li><BsCheckCircleFill className="check-icon" />1 Month Free Revision</li>
                <li><BsCheckCircleFill className="check-icon" />Delivery: 1 week</li>
              </ul>
              <button className="pricing-btn">Get Started</button>
            </div>
          </div>

          {/* Platinum Package */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="pricing-header">
                <h3 className="package-name">PLATINUM</h3>
                <div className="price">
                  <span className="currency">₹</span>
                  <span className="amount">25,999</span>
                  <span className="usd-price">$ 500</span>
                </div>
              </div>
              <ul className="features-list">
                <li><BsCheckCircleFill className="check-icon" />All Features of Basic +</li>
                <li><BsCheckCircleFill className="check-icon" />Up to 10 Pages</li>
                <li><BsCheckCircleFill className="check-icon" />Enhanced UI/UX Design</li>
                <li><BsCheckCircleFill className="check-icon" />Custom Form Features</li>
                <li><BsCheckCircleFill className="check-icon" />CMS Integration</li>
                <li><BsCheckCircleFill className="check-icon" />Dynamic Contact Form</li>
                <li><BsCheckCircleFill className="check-icon" />Blog Setup</li>
                <li><BsCheckCircleFill className="check-icon" />Image Optimization</li>
                <li><BsCheckCircleFill className="check-icon" />3 Months Free Revisions</li>
                <li><BsCheckCircleFill className="check-icon" />Delivery: 1-2 week</li>
              </ul>
              <button className="pricing-btn">Get Started</button>
            </div>
          </div>

          {/* Diamond Package */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="package-name">DIAMOND</h3>
                <div className="price">
                  <span className="currency">₹</span>
                  <span className="amount">45,999</span>
                  <span className="usd-price">$ 750</span>
                </div>
              </div>
              <ul className="features-list">
                <li><BsCheckCircleFill className="check-icon" />All Features of Standard +</li>
                <li><BsCheckCircleFill className="check-icon" />Unlimited Pages</li>
                <li><BsCheckCircleFill className="check-icon" />Advanced UI/UX Design</li>
                <li><BsCheckCircleFill className="check-icon" />Amazing Animations & Effects</li>
                <li><BsCheckCircleFill className="check-icon" />Custom Form Builders</li>
                <li><BsCheckCircleFill className="check-icon" />E-Commerce Integration</li>
                <li><BsCheckCircleFill className="check-icon" />Multi-Language Support</li>
                <li><BsCheckCircleFill className="check-icon" />Custom Web Applications</li>
                <li><BsCheckCircleFill className="check-icon" />Content Strategy</li>
                <li><BsCheckCircleFill className="check-icon" />6 Months Free Revision</li>
                <li><BsCheckCircleFill className="check-icon" />Delivery: 2-3 weeks</li>
              </ul>
              <button className="pricing-btn">Get Started</button>
            </div>
          </div>
        </div>

        <p className="pricing-note">Note: Final pricing may vary depending on specific client requirements.</p>
      </div>
    </section>
  );
};

export default Pricing; 