import '../css/servicecommon.css';
import '../css/digitalmarketingdetails.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaBullhorn, FaChartLine, FaUsers, FaRocket, FaSearch, FaLightbulb } from 'react-icons/fa';
import KeyBenefits from './KeyBenefits';

const DigitalMarketingDetails = () => {
  // Placeholder benefits for digital marketing
  const benefits = [
    {
      icon: <FaBullhorn />,
      title: 'Global Reach with Local Targeting',
      description: 'Run campaigns that are both wide-reaching and geo-targeted.'
    },
    // {
    //   icon: <FaChartLine />,
    //   title: 'Data-Driven Decisions',
    //   description: 'Every click, impression, and sale is tracked to optimize performance.'
    // },
    {
      icon: <FaRocket />,
      title: 'Cost-Efficient Advertising',
      description: 'Reach thousands with a fraction of traditional ad costs.'
    },
    {
      icon: <FaChartLine />,
      title: 'Real-Time Results',
      description: 'Monitor leads, conversions, and engagement as it happens.'
    },
    {
      icon: <FaUsers />,
      title: 'Multi-Channel Engagement',
      description: 'Be present across search engines, social media, email, and more.'
    }
  ];

  const coreServices = [
    {
      title: 'Social Media Marketing',
      items: [
        'Facebook, Instagram, LinkedIn, Twitter Ads',
        'Page setup, content calendars, creatives, ad targeting',
        'Engagement growth, follower campaigns, lead generation',
      ],
    },
    {
      title: 'Search Engine Marketing',
      items: [
        'Google Ads (Search & Display) & Conversion tracking & A/B testing',
        'Remarketing campaigns & YouTube video ads',
      ],
    },
    {
      title: 'Content Marketing',
      items: [
        'Blogs, articles, infographics & SEO-driven content planning',
        'Copywriting for ads, websites, and email campaigns',
      ],
    },
    {
      title: 'Email Marketing',
      items: [
        'Email automation campaigns (Mailchimp, Zoho, etc.)',
        'Promotional & transactional email setup & Newsletter design and tracking',
      ],
    },
    {
      title: 'Influencer & Affiliate Marketing',
      items: [
        'Micro & macro influencer campaigns',
        'Performance-based affiliate partnerships',
        'Local and niche-targeted influencer outreach',
      ],
    },
    {
      title: 'Analytics & Optimization',
      items: [
        'Setup of Google Analytics, Search Console, Meta Pixel, ROI dashboards',
        'Campaign analysis, funnel optimization, performance reporting',
      ],
    },
  ];

  return (
    <div className="web-dev-section">  
      <div className="web-dev-herosection">
        <div className="custom-container">
          <div className="section-heading-wrapper">
            <h1 className="main-title">Digital Marketing</h1>
          </div>
          <div className="intro-section">
            <div className="intro-content">
              <p className="intro-text">
                At Ray Tech, we don't just build brands, we make them thrive in the digital space. With a strategic blend of creativity, data, and performance-driven execution, we help businesses grow exponentially by reaching the right audience, at the right time, on the right platform.
              </p>
              <p className="intro-text mb-0">
                Whether you're launching a new product, reviving your brand, or expanding to new markets, our digital marketing solutions help you connect, convert, and succeed.
With our cutting-edge expertise in website design, graphic design, SEO, digital marketing, and customized ERP solutions, we empower businesses to not only keep up with the digital revolution but to lead it.</p>
            </div>
            <div className="intro-animation">
              <DotLottieReact
                src="https://lottie.host/0fb32271-f0be-4033-b82f-bd089eb223a6/u7sSCcRzwf.lottie"
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
                subtitle="See how digital marketing can accelerate your business growth and engagement."
              />
            </div>
          </div>
          <div className="section-dots dots-top-right"></div>
          <div className="section-dots dots-bottom-left"></div>
        </div>
      </div>

      <div className="core-services-section">
        <div className="custom-container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <section className="graphic-core-services-section">
                <div className="section-heading-wrapper">
                  <h2 className="section-title">Core Services</h2>
                  <p className="byline">Ray Tech delivers full-stack digital marketing services designed for startups, SMEs, and enterprises:</p>
                </div>
                <div className="services-showcase">
                  {coreServices.map((service, idx) => (
                    <div className="service-item" key={idx}>
                      <div className="service-content">
                        <h4>{service.title}</h4>
                        <ul className="dm-service-list">
                          {service.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="service-decoration"></div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="dm-results-section">
        <div className="custom-container">
          <div className="section-heading-wrapper">
            <h2 className="section-title">Digital Campaign Results Snapshot</h2>
          </div>
          <div className="dm-results-table-wrapper">
            <table className="dm-results-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Industry</th>
                  <th>Campaign</th>
                  <th>Leads Generated</th>
                  <th>Conversion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dental Clinic</td>
                  <td>Healthcare</td>
                  <td>Local Awareness + Booking</td>
                  <td>900/month</td>
                  <td>50+ new patients</td>
                </tr>
                <tr>
                  <td>EdTech Startup</td>
                  <td>Education</td>
                  <td>Webinar Funnel + Lead Gen</td>
                  <td>1200/month</td>
                  <td>3,000+ course signups</td>
                </tr>
                <tr>
                  <td>Boutique Brand</td>
                  <td>Fashion</td>
                  <td>E-commerce Sales</td>
                  <td>3.5x ROAS</td>
                  <td>₹1.8L in 30 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dm-results-samplework">
            <h4>Sample Creative Work <span style={{fontWeight:400}}>(on request)</span></h4>
            <ul className="dm-results-sample-list">
              <li>Social Media Post Templates</li>
              <li>Ad Banners & Carousels, Landing Page Samples</li>
              <li>Email Campaign Designs, Ad Copy Examples</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Performance Marketing Flowchart Section */}
      <div className="performance-flowchart-section">
        <div className="custom-container">
          <h2 className="section-title">Scale with Performance Marketing</h2>
          <div className="performance-flowchart">
            <div className="flowchart-step up">
              <div className="flowchart-icon"><FaSearch /></div>
              <div className="flowchart-step-label">Step 1</div>
              <div className="flowchart-step-title">Free Digital Marketing Audit</div>
            </div>
            <div className="flowchart-connector"></div>
            <div className="flowchart-step down">
              <div className="flowchart-icon"><FaLightbulb /></div>
              <div className="flowchart-step-label">Step 2</div>
              <div className="flowchart-step-title">Customized Strategy Planning</div>
            </div>
            <div className="flowchart-connector"></div>
            <div className="flowchart-step up">
              <div className="flowchart-icon"><FaRocket /></div>
              <div className="flowchart-step-label">Step 3</div>
              <div className="flowchart-step-title">Launch Campaign with Full Support</div>
            </div>
            <div className="flowchart-connector"></div>
            <div className="flowchart-step down">
              <div className="flowchart-icon"><FaChartLine /></div>
              <div className="flowchart-step-label">Step 4</div>
              <div className="flowchart-step-title">Weekly Optimization & Reporting</div>
            </div>
          </div>
          <div className="performance-flowchart-contact">
            <span className="contact-bold">Contact us today</span> to discuss your project and get a custom quote.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingDetails; 