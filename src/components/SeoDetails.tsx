import '../css/seoDetails.css';
import '../css/servicecommon.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaChartLine, FaBullseye, FaRocket, FaMapMarkerAlt, FaShoppingBag, FaTooth, FaGraduationCap, FaBuilding, FaHotel, FaAppleAlt, FaUsers, FaCogs, FaTag, FaLink } from 'react-icons/fa';
import KeyBenefits from './KeyBenefits';

const SeoDetails = () => {
  // Benefits section (from image)
  const benefits = [
    {
      icon: <FaChartLine />,
      title: 'Higher Website Traffic',
      description: 'Drive qualified, intent-based traffic to your site without paid ads.'
    },
    {
      icon: <FaBullseye />,
      title: 'More Leads and Sales',
      description: 'Turn searchers into loyal customers with optimized content and landing pages.'
    },
    {
      icon: <FaRocket />,
      title: 'Improved Brand Authority',
      description: 'Higher rankings make your brand look more credible and trustworthy.'
    },
    // {
    //   icon: <FaMapMarkerAlt />,
    //   title: 'Better User Experience (UX)',
    //   description: 'SEO encourages site speed, mobile friendliness, and structured content.'
    // },
    {
      icon: <FaChartLine />,
      title: 'Long-Term ROI',
      description: 'Unlike ads, organic results deliver returns long after optimization work is done.'
    }
  ];

  // SEO Pillars (from image)
  const seoPillars = [
    {
      title: 'Technical SEO',
      icon: <FaCogs style={{ color: '#2563EB', fontSize: '1.5rem', flexShrink: 0 }} />, 
      items: [
        'Full website audit',
        'Page speed optimization',
        'Mobile responsiveness',
        'Crawl error fixing',
        'Indexation and site architecture',
        'Schema markup',
      ],
    },
    {
      title: 'On-Page SEO',
      icon: <FaTag style={{ color: '#2563EB', fontSize: '1.5rem', flexShrink: 0 }} />, 
      items: [
        'Keyword research & targeting',
        'Meta tags (title & descriptions)',
        'Header & content optimization',
        'Internal linking structure',
        'Alt text for images',
      ],
    },
    {
      title: 'Off-Page SEO',
      icon: <FaLink style={{ color: '#2563EB', fontSize: '1.5rem', flexShrink: 0 }} />, 
      items: [
        'High-quality backlink building',
        'Guest posting and link outreach',
        'Social bookmarking',
        'Business directory listings',
      ],
    },
    {
      title: 'Local SEO',
      icon: <FaMapMarkerAlt style={{ color: '#2563EB', fontSize: '1.5rem', flexShrink: 0 }} />, 
      items: [
        'Google My Business optimization',
        'Local keyword targeting',
        'Map listing improvement',
        'Reviews and reputation management',
      ],
    },
  ];

  // Industry Focus (from image)
  const targetAudience = [
    'E-commerce',
    'Healthcare',
    'Education',
    'Real Estate',
    'Hospitality',
    'FMCG',
    'Startups',
    'and more',
  ];

  return (
    <div className="seo-section">
      <div className="web-dev-herosection">
        <div className="custom-container">
          <div className="section-heading-wrapper">
            <h1 className="main-title">SEO Optimization & Strategy</h1>
          </div>
          <div className="intro-section">
            <div className="intro-content">
              
              <p className="intro-text">
                In the ever-evolving digital landscape, Search Engine Optimization (SEO) is paramount for businesses aiming to enhance their online visibility, drive organic traffic, and achieve sustainable growth. At Ray Tech, we specialize in delivering tailored SEO solutions that align with your business objectives and industry dynamics.
              </p>
              <p className="intro-text mb-0">
                We empower businesses not only through design and development but also by driving measurable visibility and sustainable growth with intelligent SEO strategies. Whether you're a startup, enterprise, local business, or e-commerce store, we help you rank higher, get discovered faster, and convert better.
              </p>
            </div>
            <div className="intro-animation">
              <DotLottieReact
                src="https://lottie.host/7ea3eba5-916c-4aae-b654-d0da98349c54/Io4W9QZivX.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <div className="custom-container">
          <div className="row justify-content-center">
            <div className="">
              <KeyBenefits
                benefits={benefits}
                title="Key Benefits"
                subtitle="Discover how our SEO expertise can drive your business growth and online success."
              />
            </div>
          </div>
          <div className="section-dots dots-top-right"></div>
          <div className="section-dots dots-bottom-left"></div>
        </div>
      </div>

      <div className="target-audience-section">
        <div className="custom-container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <section className="seo-who-needs-section">
                <div className="section-heading-wrapper">
                  <h2 className="section-title">Target Audience</h2>
                  <p className="byline">
                    We serve a wide range of industries with tailored SEO strategies:
                  </p>
                </div>
                <div className="audience-grid">
                  <div className="audience-item">
                    <div className="audience-icon">
                      <FaShoppingBag />
                    </div>
                    <h4>E-commerce</h4>
                    <div className="audience-line"></div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <FaTooth />
                    </div>
                    <h4>Healthcare</h4>
                    <div className="audience-line"></div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <FaGraduationCap />
                    </div>
                    <h4>Education</h4>
                    <div className="audience-line"></div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <FaBuilding />
                    </div>
                    <h4>Real Estate</h4>
                    <div className="audience-line"></div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <FaHotel />
                    </div>
                    <h4>Hospitality</h4>
                    <div className="audience-line"></div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <FaAppleAlt />
                    </div>
                    <h4>FMCG</h4>
                    <div className="audience-line"></div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <FaRocket />
                    </div>
                    <h4>Startups</h4>
                    <div className="audience-line"></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="web-dev-services-section">
        <div className="custom-container">
          <div className="section-heading-wrapper">
            <h2 className="section-title">Core Services</h2>
            <p className="byline">Our approach to SEO goes beyond keyword rankings. We focus on these essential components:</p>
          </div>
          <div className="web-dev-services-grid">
            {seoPillars.map((pillar, idx) => (
              <div key={idx} className="web-dev-service-item seo-pillar-card">
                <div className="pillar-title-row">
                  {pillar.icon}
                  <h3 className="web-dev-service-text" style={{fontWeight:700, fontSize:'1.15rem', margin:0}}>{pillar.title}</h3>
                </div>
                <ul className="seo-pillars-list">
                  {pillar.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="section-dots dots-bottom-left"></div>
        </div>
      </div>

      {/* What Next Section */}
      <div className="seo-next-steps-section">
        <div className="custom-container">
          <div className="section-heading-wrapper">
            <h2 className="section-title">What Next?</h2>
            <p className="byline">Your journey to better rankings and more leads starts here. Here's how we work together:</p>
          </div>
          <ol className="seo-next-steps-list">
            <li>
              <span className="seo-step-icon">1</span>
              <span className="seo-step-title">Free Consultation</span>
              <span className="seo-step-desc">Discuss your business goals and current challenges with our SEO experts.</span>
            </li>
            <li>
              <span className="seo-step-icon">2</span>
              <span className="seo-step-title">Comprehensive Audit</span>
              <span className="seo-step-desc">We analyze your website, competitors, and market to identify opportunities.</span>
            </li>
            <li>
              <span className="seo-step-icon">3</span>
              <span className="seo-step-title">Custom Strategy</span>
              <span className="seo-step-desc">Receive a tailored SEO plan designed for your business and industry.</span>
            </li>
            <li>
              <span className="seo-step-icon">4</span>
              <span className="seo-step-title">Execution</span>
              <span className="seo-step-desc">Our team implements the strategy, optimizing your site and building authority.</span>
            </li>
            <li>
              <span className="seo-step-icon">5</span>
              <span className="seo-step-title">Reporting & Growth</span>
              <span className="seo-step-desc">Track progress with transparent reports and ongoing support for continued success.</span>
            </li>
          </ol>
        </div>
      </div>

      {/* ROI Example Section */}
      <div className="seo-roi-section">
        <div className="custom-container">
          <h2 className="seo-roi-title">Return on Investment (SEO ROI Example)</h2>
          <p className="seo-roi-byline">Let's assume a <b>Dental Clinic</b> website in a competitive metro city:</p>
          <ul className="seo-roi-list">
            <li><b>Initial Monthly Website Visitors:</b> 200</li>
            <li><b>Post SEO Monthly Visitors:</b> 1,200 (+500%)</li>
            <li><b>Conversion Rate:</b> 5%</li>
            <li><b>New Patient Appointments:</b> 60/month</li>
            <li><b>Avg. Revenue per Patient:</b> ₹2,000</li>
            <li><b>New Revenue Generated:</b> ₹1,20,000/month</li>
          </ul>
          <div className="seo-roi-highlight">
            Even with our ₹50,000 Diamond SEO Package, <b>your break-even can be achieved in just 2–3 weeks.</b> Post-SEO, the growth becomes exponential – passive, profitable, and compounding.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoDetails; 