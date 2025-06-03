import { HiUserGroup } from "react-icons/hi";
import { FiAward, FiCheckCircle } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import "../css/whychoose.css";

export default function WhyChoose() {
  const reasons = [
    {
      icon: <HiUserGroup className="reason-icon" />,
      title: "Expert Team",
      description: "Skilled professionals"
    },
    {
      icon: <FiAward className="reason-icon" />,
      title: "Quality Focus",
      description: "Excellence in every project"
    },
    {
      icon: <BiSupport className="reason-icon" />,
      title: "Ongoing Support",
      description: "24/7 technical assistance"
    },
    {
      icon: <FiCheckCircle className="reason-icon" />,
      title: "Tailored Solutions",
      description: "Customized to your needs"
    }
  ];

  return (
    <section id="why-us" className="why-choose-section">
      <div className="container">
        <h2 className="section-title">Why Choose Ray Tech</h2>
        
        <div className="row g-4 justify-content-center">
          {reasons.map((reason, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="reason-card text-center">
                <div className="reason-icon-wrapper">
                  {reason.icon}
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 