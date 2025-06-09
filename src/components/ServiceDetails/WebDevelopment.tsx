import React from 'react';
import '../../css/serviceDetails.css';

const WebDevelopment = () => {
  const features = [
    {
      title: "Custom Website Development",
      description: "Tailored solutions built from scratch to meet your specific business needs and goals.",
      points: [
        "Responsive design for all devices",
        "Modern UI/UX implementation",
        "Performance optimization",
        "Cross-browser compatibility"
      ]
    },
    {
      title: "E-commerce Solutions",
      description: "Robust online stores with secure payment gateways and inventory management.",
      points: [
        "Shopping cart integration",
        "Secure payment processing",
        "Product management system",
        "Order tracking functionality"
      ]
    },
    {
      title: "CMS Integration",
      description: "Easy-to-use content management systems for seamless website updates.",
      points: [
        "User-friendly admin interface",
        "Content scheduling features",
        "Media library management",
        "User role management"
      ]
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support and maintenance to keep your website running smoothly.",
      points: [
        "Regular security updates",
        "Performance monitoring",
        "Content updates",
        "Technical support"
      ]
    }
  ];

  return (
    <div className="service-details-section">
      <div className="container">
        <h2 className="section-title text-center">Web Development Services</h2>
        <p className="section-description">
          Transform your digital presence with our professional web development services. 
          We create modern, responsive, and user-friendly websites that help your business grow.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <ul className="feature-points">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment; 