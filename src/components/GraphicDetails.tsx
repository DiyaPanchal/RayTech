import '../css/graphicdetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaCheckCircle, FaUsers, FaChartLine, FaComments, FaTrophy, FaRocket, FaTooth, FaShoppingBag, FaGraduationCap, FaBuilding } from 'react-icons/fa';
import { SiAdobe, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiFigma, SiCanva, SiCoreldraw, SiAdobexd, SiAdobeaftereffects, SiAdobepremierepro } from 'react-icons/si';

const GraphicDetails = () => {
  return (
    <div className="graphic-details-section">
      <div className="custom-container">
        {/* Main Title */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h1 className="graphic-main-title">Graphic Design</h1>
          </div>
        </div>

        {/* Animation and Byline Section */}
        <div className="row align-items-center mb-5">
          {/* Animation section */}
          <div className="col-lg-7 d-none d-lg-block">
            <div className="animation-space">
              <DotLottieReact
                src="https://lottie.host/a3626f7b-aafe-4de8-8fe6-fd84e0541ca2/OXzFxdK10x.lottie"
                loop
                autoplay
                className="lottie-animation"
              />
            </div>
          </div>
          
          {/* Byline section */}
          <div className="col-lg-5">
            <div className="graphic-byline-section">
              <p className="graphic-byline">
                In today's digital landscape, compelling design is more than just aesthetics—it's a <strong>strategic business investment</strong>. Our expert team transforms your vision into stunning visuals that captivate your audience and drive results. From brand identity to marketing materials, we create designs that not only look beautiful but also deliver measurable impact.
              </p>
              <p className="graphic-byline">
                Whether you're building a brand, launching a product, or running a campaign, our designs build trust, enhance engagement, and boost conversion rates. We combine creativity with strategy to ensure your visual content stands out in today's competitive market.
              </p>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="graphic-why-section">
              <h3 className="section-title mb-4">Key Benefits</h3>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <FaCheckCircle />
                    </div>
                    <div className="benefit-content">
                      <h4 className="benefit-title">Brand Recognition</h4>
                      <p className="benefit-description">
                        Create memorable logos and consistent visual identity across all platforms. It's the foundation of your brand's personality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <FaUsers />
                    </div>
                    <div className="benefit-content">
                      <h4 className="benefit-title">Customer Engagement</h4>
                      <p className="benefit-description">
                        Well-designed banners, social media posts, brochures, and flyers grab attention and drive action.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <FaChartLine />
                    </div>
                    <div className="benefit-content">
                      <h4 className="benefit-title">Competitive Advantage</h4>
                      <p className="benefit-description">
                        Brands with refined visual presentation outperform their competition in customer retention and marketing ROI.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <FaComments />
                    </div>
                    <div className="benefit-content">
                      <h4 className="benefit-title">Communication Efficiency</h4>
                      <p className="benefit-description">
                        A single visual can convey messages that would take paragraphs to write. Design enhances clarity and emotion.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <FaTrophy />
                    </div>
                    <div className="benefit-content">
                      <h4 className="benefit-title">Marketing Success</h4>
                      <p className="benefit-description">
                        Campaigns with strong graphics generate higher impressions, engagement, and conversions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="graphic-section-divider" />
        
        {/* Target Audience Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <section className="graphic-who-needs-section">
              <div className="graphic-section-heading-wrapper">
                <h2 className="section-title">Target Audience</h2>
                <p className="graphic-byline">Graphic design is essential for businesses, professionals, and organizations looking to stand out and connect with their audience.</p>
              </div>
              <div className="audience-grid">
                <div className="audience-item">
                  <div className="audience-icon">
                    <FaRocket />
                  </div>
                  <h4>Startups & Small Businesses</h4>
                  <div className="audience-line"></div>
                </div>
                <div className="audience-item">
                  <div className="audience-icon">
                    <FaTooth />
                  </div>
                  <h4>Dental Clinics & Healthcare</h4>
                  <div className="audience-line"></div>
                </div>
                <div className="audience-item">
                  <div className="audience-icon">
                    <FaShoppingBag />
                  </div>
                  <h4>Fashion & E-commerce</h4>
                  <div className="audience-line"></div>
                </div>
                <div className="audience-item">
                  <div className="audience-icon">
                    <FaGraduationCap />
                  </div>
                  <h4>Educational Institutes</h4>
                  <div className="audience-line"></div>
                </div>
                <div className="audience-item">
                  <div className="audience-icon">
                    <FaBuilding />
                  </div>
                  <h4>IT Firms & Real Estate</h4>
                  <div className="audience-line"></div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <hr className="graphic-section-divider" />

        {/* Design Tools Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <section className="graphic-experts-section">
              <div className="graphic-section-heading-wrapper">
                <h2 className="section-title">Design Tools & Platforms</h2>
                <p className="graphic-byline">We leverage industry-leading tools and creative expertise to deliver pixel-perfect, impactful graphic design solutions for your brand.</p>
              </div>
              <div className="tools-showcase">
                <div className="tool-category">
                  <h3 className="tool-category-title">Adobe Creative Suite</h3>
                  <div className="tools-grid">
                    <div className="tool-item">
                      <div className="tool-logo">
                        <SiAdobephotoshop />
                      </div>
                      <span className="tool-name">Photoshop</span>
                    </div>
                    <div className="tool-item">
                      <div className="tool-logo">
                        <SiAdobeillustrator />
                      </div>
                      <span className="tool-name">Illustrator</span>
                    </div>
                    <div className="tool-item">
                      <div className="tool-logo">
                        <SiAdobeindesign />
                      </div>
                      <span className="tool-name">InDesign</span>
                    </div>
                    <div className="tool-item">
                      <div className="tool-logo">
                        <SiAdobexd />
                      </div>
                      <span className="tool-name">Adobe XD</span>
                    </div>
                    <div className="tool-item">
                      <div className="tool-logo">
                        <SiAdobeaftereffects />
                      </div>
                      <span className="tool-name">After Effects</span>
                    </div>
                    <div className="tool-item">
                      <div className="tool-logo">
                        <SiAdobepremierepro />
                      </div>
                      <span className="tool-name">Premiere Pro</span>
                    </div>
                  </div>
                </div>
                <div className="tool-category">
                  <h3 className="tool-category-title">Other Design Tools</h3>
                  <div className="tools-grid">
                    <div className="tool-item">
                      <div className="tool-logo">
                        <SiFigma />
                      </div>
                      <span className="tool-name">Figma</span>
                    </div>
                    <div className="tool-item">
                      <div className="tool-logo">
                        <SiCanva />
                      </div>
                      <span className="tool-name">Canva Pro</span>
                    </div>
                    <div className="tool-item">
                      <div className="tool-logo">
                        <SiCoreldraw />
                      </div>
                      <span className="tool-name">CorelDRAW</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <hr className="graphic-section-divider" />

        {/* Core Services Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <section className="graphic-core-services-section">
              <div className="graphic-section-heading-wrapper">
                <h2 className="section-title">Core Services</h2>
                <p className="graphic-byline">Comprehensive graphic design solutions tailored to your brand and business needs.</p>
              </div>
              <div className="services-showcase">
                <div className="service-item">
                  <div className="service-content">
                    <h4>Logo Design</h4>
                    <p>Multiple concepts, brand guideline support</p>
                  </div>
                  <div className="service-decoration"></div>
                </div>
                <div className="service-item">
                  <div className="service-content">
                    <h4>Brand Identity</h4>
                    <p>Business cards, letterheads, envelopes</p>
                  </div>
                  <div className="service-decoration"></div>
                </div>
                <div className="service-item">
                  <div className="service-content">
                    <h4>Marketing Collateral</h4>
                    <p>Flyers, brochures, banners</p>
                  </div>
                  <div className="service-decoration"></div>
                </div>
                <div className="service-item">
                  <div className="service-content">
                    <h4>Social Media Graphics</h4>
                    <p>Instagram posts, reels thumbnails, ads</p>
                  </div>
                  <div className="service-decoration"></div>
                </div>
                <div className="service-item">
                  <div className="service-content">
                    <h4>UI/UX & App Screens</h4>
                    <p>Prototyping, wireframing, design systems</p>
                  </div>
                  <div className="service-decoration"></div>
                </div>
                <div className="service-item">
                  <div className="service-content">
                    <h4>Pitch Decks & Presentations</h4>
                    <p>Corporate decks, infographics, slide animations</p>
                  </div>
                  <div className="service-decoration"></div>
                </div>
                <div className="service-item">
                  <div className="service-content">
                    <h4>Packaging Design</h4>
                    <p>Labels, pouches, box designs</p>
                  </div>
                  <div className="service-decoration"></div>
                </div>
                <div className="service-item">
                  <div className="service-content">
                    <h4>Motion Graphics</h4>
                    <p>Logo animations, promo videos</p>
                  </div>
                  <div className="service-decoration"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDetails; 