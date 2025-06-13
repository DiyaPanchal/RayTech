import "../css/services.css";
import { FaCode } from "react-icons/fa";
import { BsPalette } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { TbChartLine } from "react-icons/tb";
import { HiPuzzle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (title: string) => {
    switch (title) {
      case "Website Design Development":
        navigate("/web");
        break;
      case "Graphic Design":
        navigate("/graphic");
        break;
      case "SEO Services":
        navigate("/seo");
        break;
      case "Digital Marketing":
        navigate("/digital");
        break;
      case "ERP Solutions":
        navigate("/erp");
        break;
      default:
        navigate("/");
    }
  };
  
  const services = [
    {
      icon: <FaCode className="service-icon" />,
      title: "Website Design Development",
      items: [
        "Custom Development",
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Integration",
      ],
    },
    {
      icon: <BsPalette className="service-icon" />,
      title: "Graphic Design",
      items: [
        "Logo & Brand Identity",
        "Print Materials",
        "Social Media Graphics",
        "Infographics",
      ],
    },
    {
      icon: <BiSearch className="service-icon" />,
      title: "SEO Services",
      items: ["Website Audit", "On-page SEO", "Technical SEO", "Local SEO"],
    },
    {
      icon: <TbChartLine className="service-icon" />,
      title: "Digital Marketing",
      items: [
        "Social Media Marketing",
        "PPC Advertising",
        "Content Marketing",
        "Email Marketing",
      ],
    },
    {
      icon: <HiPuzzle className="service-icon" />,
      title: "ERP Solutions",
      items: [
        "Inventory Management",
        "HRM & Payroll",
        "Accounting & CRM",
        "Custom Modules",
      ],
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="custom-container">
        <h2 className="section-title text-center">Our Services</h2>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div 
                className="service-card" 
                onClick={() => handleServiceClick(service.title)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <ul className="service-list">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <span className="bullet">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 