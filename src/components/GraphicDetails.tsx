import "../css/graphicdetails.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  FaCheckCircle,
  FaUsers,
  FaComments,
  FaTrophy,
  FaRocket,
  FaTooth,
  FaShoppingBag,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa";

import "../css/graphicdetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiFigma,
  SiCanva,
  SiCoreldraw,
  SiAdobexd,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";
import KeyBenefits from "./KeyBenefits";
import '../css/servicecommon.css';

const GraphicDetails = () => {
  const benefits = [
    {
      icon: <FaCheckCircle />,
      title: "Brand Recognition",
      description:
        "Create memorable logos and consistent visual identity across all platforms. It's the foundation of your brand's personality.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Engagement",
      description:
        "Well-designed banners, social media posts, brochures, and flyers grab attention and drive action.",
    },
    // {
    //   icon: <FaChartLine />,
    //   title: "Competitive Advantage",
    //   description:
    //     "Brands with refined visual presentation outperform their competition in customer retention and marketing ROI.",
    // },
    {
      icon: <FaComments />,
      title: "Communication Efficiency",
      description:
        "A single visual can convey messages that would take paragraphs to write. Design enhances clarity and emotion.",
    },
    {
      icon: <FaTrophy />,
      title: "Marketing Success",
      description:
        "Campaigns with strong graphics generate higher impressions, engagement, and conversions.",
    },
  ];

  return (
    <div className="graphic-details-section">
      {/* Main Title - Hero Section */}
      <div className="web-dev-herosection">
        <div className="custom-container">
          <div className="section-heading-wrapper">
            <h1 className="main-title">Graphic Design</h1>
          </div>
          <div className="intro-section">
            <div className="intro-content">
              <p className="intro-text">
                In today's digital landscape, compelling design is more than just aesthetics it's a strategic business investment. Our expert team transforms your vision into stunning visuals that captivate your audience and drive results. From brand identity to marketing materials, we create designs that not only look beautiful but also deliver measurable impact.
              </p>
              <p className="intro-text mb-0">
                Whether you're building a brand, launching a product, or running a campaign, our designs build trust, enhance engagement, and boost conversion rates. We combine creativity with strategy to ensure your visual content stands out in today's competitive market.
              </p>
            </div>
            <div className="intro-animation">
              <DotLottieReact
                src="https://lottie.host/a3626f7b-aafe-4de8-8fe6-fd84e0541ca2/OXzFxdK10x.lottie"
                loop
                autoplay
                className="lottie-animation"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="benefits-section">
        <div className="custom-container">           
          <div className="row justify-content-center">
            <div className="">
              <KeyBenefits
                benefits={benefits}
                title="Key Benefits"
                subtitle="Discover how professional graphic design can transform your brand and drive business growth"
              />
        </div>
      </div>
 </div>
 </div>
      {/* Target Audience Section */}
      <div className="target-audience-section">
        <div className="custom-container">
          <div className="row justify-content-center">
        <div className="col-lg-12">
          <section>
            <div className="section-heading-wrapper">
              <h2 className="section-title">Target Audience</h2>
              <p className="byline">
                Graphic design is essential for businesses, professionals, and
                organizations looking to stand out and connect with their
                audience.
              </p>
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
        </div>
      </div>
      

      {/* Design Tools Section */}
      <div className="design-tools-section">
        <div className="custom-container">
<div className="row justify-content-center">
        <div className="col-lg-12">
          <section className="graphic-experts-section">
            <div className="section-heading-wrapper">
              <h2 className="section-title">Design Tools & Platforms</h2>
              <p className="byline">
                We leverage industry-leading tools and creative expertise to
                deliver pixel-perfect, impactful graphic design solutions for
                your brand.
              </p>
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
        </div>
      </div>
      

      {/* Core Services Section */}
      <div className="core-services-section">
        <div className="custom-container">
<div className="row justify-content-center">
        <div className="col-lg-12">
          <section className="graphic-core-services-section">
            <div className="section-heading-wrapper">
              <h2 className="section-title">Core Services</h2>
              <p className="byline">
                Comprehensive graphic design solutions tailored to your brand
                and business needs.
              </p>
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
      
    </div>
  );
};

export default GraphicDetails;
