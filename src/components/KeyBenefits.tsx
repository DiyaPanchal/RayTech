import React from 'react';
import { FaCheckCircle, FaUsers, FaChartLine, FaComments, FaTrophy } from 'react-icons/fa';
import '../css/keybenefits.css';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface KeyBenefitsProps {
  benefits: Benefit[];
  title?: string;
  subtitle?: string;
}

const KeyBenefits: React.FC<KeyBenefitsProps> = ({ 
  benefits, 
  title = "Key Benefits",
  subtitle = "Discover how our services can transform your business and drive sustainable growth"
}) => {
  return (
    <div className="graphic-why-section">
      <div className="section-heading-wrapper">
        <h2 className="section-title">{title}</h2>
        <p className="byline">{subtitle}</p>
      </div>
      <div className="row g-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="col-md-6">
            <div className="benefit-card">
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <div className="benefit-content">
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-description">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyBenefits; 