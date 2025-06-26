import '../css/servicecommon.css';
import '../css/digitalmarketingdetails.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaBullhorn, FaChartLine, FaUsers, FaRocket } from 'react-icons/fa';
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

  // Placeholder services for digital marketing
  const services = [
    'Social Media Marketing',
    'Search Engine Marketing (SEM)',
    'Content Marketing',
    'Email Campaigns',
    'Influencer Marketing',
    'Analytics & Reporting',
    'Online Reputation Management',
    'Conversion Rate Optimization'
  ];

  // Core services data structured for grouped display
  const coreServices = [
    {
      title: 'Social Media Marketing (SMM)',
      items: [
        'Facebook, Instagram, LinkedIn, Twitter Ads',
        'Page setup, content calendars, creatives, ad targeting',
        'Engagement growth, follower campaigns, lead generation',
      ],
    },
    {
      title: 'Search Engine Marketing (SEM)',
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
                At Ray Tech, we don't just build brands — we make them thrive in the digital space. With a strategic blend of creativity, data, and performance-driven execution, we help businesses grow exponentially by reaching the right audience, at the right time, on the right platform.
              </p>
              <p className="intro-text mb-0">
                Whether you're launching a new product, reviving your brand, or expanding to new markets — our digital marketing solutions help you connect, convert, and succeed.
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
    </div>
  );
};

export default DigitalMarketingDetails; 