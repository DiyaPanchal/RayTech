import React from 'react';
import '../../css/webDevelopment.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const WebDevelopment = () => {
  const benefits = [
    {
      title: "Brand Visibility",
      description: "Your website is the face of your business. It allows you to showcase your services, products, and values to a global audience, 24/7."
    },
    {
      title: "Customer Engagement",
      description: "A well-designed website creates an interactive experience, allowing you to engage with potential customers through inquiries, bookings, or product sales."
    },
    {
      title: "Trust & Credibility",
      description: "A professional website enhances your reputation, building trust with customers. A modern, user-friendly design signals quality and expertise."
    },
    {
      title: "Competitive Edge",
      description: "In a crowded market, having a unique, optimized website gives you the edge over competitors, making your brand stand out and allowing you to capture more market share."
    },
    {
      title: "SEO & Lead Generation",
      description: "A website serves as the foundation for your digital marketing strategy. By implementing SEO best practices, your site can drive organic traffic and generate leads, boosting your visibility and sales."
    }
  ];

  const technicalProfile = [
    {
      category: "Frontend",
      icons: [
        { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
      ],
      items: ["HTML5", "CSS3", "JavaScript", "ReactJS"]
    },
    {
      category: "Backend",
      icons: [
        { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ],
      items: ["PHP", "Firebase", "Appwrite", "MySQL"]
    },
    {
      category: "Tools & Frameworks",
      icons: [
        { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
      ],
      items: ["React Native", "REST APIs", "Twitter API"]
    },
    {
      category: "CMS & E-Commerce",
      icons: [
        { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
        { name: "WooCommerce", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" }
      ],
      items: ["Custom platforms", "Firebase", "PHP integration"]
    },
    {
      category: "Special Features",
      icons: [
        { name: "NodeJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
      ],
      items: ["Admin Panels", "Budgeting Tools", "Resume Builders", "Social Media Automation"]
    }
  ];

  const services = [
    "Corporate, Portfolio, and Educational Website",
    "Premium Dental Doctors Websites",
    "E-commerce Platforms (React + Firebase)",
    "Travel & Tour Booking Platforms",
    "Resume Builders & Job Portals",
    "Event Management Websites",
    "Real-Time Dashboards and Admin Panels",
    "Budgeting & Finance Apps (React Native: Expensify)",
    "Social Media Tools using APIs (e.g., Post Schedulers)"
  ];

  return (
    <div className="web-dev-section">
      <div className="custom-container">
        <div className="section-heading-wrapper">
          <h1 className="main-title">Web Design & Development</h1>
        </div>
        
        <div className="intro-section">
          <div className="intro-content">
            <p className="intro-text">
              Unlock Your Digital Potential with Ray Tech! In today's digital-first world, 
              a website is no longer just an option — it's an essential tool for 
              growth, engagement, and credibility. Whether you're a startup, a small business, 
              a government officer or private officer looking for part time or full time business 
              or an enterprise, your online presence is critical for reaching and retaining customers.
            </p>
            <p className="intro-text mb-0">
              Your website is often the first point of contact for potential clients, partners, and customers 
              as they say, first impressions are everything.
            </p>
          </div>
          <div className="intro-animation">
            <DotLottieReact
              src="https://lottie.host/0d403623-9af4-4984-980c-b069f4727fe7/XR1rNr4L3j.lottie"
              loop
              autoplay
            />
          </div>
        </div>

        <div className="benefits-section">
          <div className="section-heading-wrapper">
            <h2 className="benefits-title">Key Benefits</h2>
            <p className="byline">Discover how a professional website can transform your business and drive sustainable growth</p>
          </div>
          <div className="benefits-container">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description mb-0">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="section-dots dots-top-right"></div>
          <div className="section-dots dots-bottom-left"></div>
        </div>

        <div className="technical-section">
          <div className="section-heading-wrapper">
            <h2 className="tech-section-title">Our Tech Stack</h2>
            <p className="byline">Powered by cutting-edge technologies and frameworks to deliver robust, scalable solutions</p>
          </div>
          
          <div className="tech-grid">
            {technicalProfile.map((tech, index) => (
              <div key={index} className="tech-category">
                <h3 className="tech-title">{tech.category}</h3>
                <div className="tech-icons">
                  {tech.icons.map((icon, iconIndex) => (
                    <div key={iconIndex} className="tech-icon" title={icon.name}>
                      <img src={icon.src} alt={icon.name} className="img-fluid" />
                    </div>
                  ))}
                </div>
                <div className="tech-items">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="tech-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="web-dev-services-section">
          <div className="section-heading-wrapper">
            <h2 className="web-dev-services-title">Core Services</h2>
            <p className="byline">Comprehensive web development solutions tailored to your specific needs and industry requirements</p>
          </div>
          <div className="web-dev-services-grid">
            {services.map((service, index) => (
              <div key={index} className="web-dev-service-item">
                <p className="web-dev-service-text mb-0">{service}</p>
              </div>
            ))}
          </div>
          <div className="section-dots dots-bottom-left"></div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment; 