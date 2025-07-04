import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaUserMd, FaShoppingCart, FaShieldAlt, FaGraduationCap, FaQrcode, FaSeedling, FaBuilding, FaChalkboardTeacher } from "react-icons/fa";
import "../css/webclient.css";

const clients = [
  {
    category: "DIAMOND",
    industry: "Doctors / Dentists",
    website: "https://dentalux.ancorathemes.com/",
    display: "dentalux.ancorathemes.com",
    icon: <FaUserMd size={36} color="#fff" />,
    desc: "Modern dental solutions for clinics and practitioners.",
    bgImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "DIAMOND",
    industry: "E-commerce / Tattoo",
    website: "http://www.avontattoosupply.com",
    display: "avontattoosupply.com",
    icon: <FaShoppingCart size={36} color="#fff" />,
    desc: "Robust e-commerce platform for tattoo supplies.",
    // bgImage: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    backgroundColor: "#1e2c44",
  },
  {
    category: "DIAMOND",
    industry: "Cybersecurity & Tech",
    website: "http://www.bigxtech.com",
    display: "bigxtech.com",
    icon: <FaShieldAlt size={36} color="#fff" />,
    desc: "Cutting-edge cybersecurity and tech solutions.",
    bgImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "PLATINUM",
    industry: "Doctors / Dentists",
    website:
      "https://preview.themeforest.net/item/dentalx-dentist-dental-clinic-html-template/full_screen_preview/57242771",
    display: "themeforest.net/item/dentalx-dentist...",
    icon: <FaUserMd size={36} color="#fff" />,
    desc: "Premium web presence for dental professionals.",
    bgImage:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "PLATINUM",
    industry: "Tech Education",
    website: "http://www.futurecoreinnovations.tech",
    display: "futurecoreinnovations.tech",
    icon: <FaGraduationCap size={36} color="#fff" />,
    desc: "Innovative tech education platforms.",
    bgImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "PLATINUM",
    industry: "QR Tech Solutions",
    website: "http://www.smarqrtech.com",
    display: "smarqrtech.com",
    icon: <FaQrcode size={36} color="#fff" />,
    desc: "Smart QR solutions for modern businesses.",
    bgImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "GOLD",
    industry: "Doctors / Dentists",
    website:
      "https://preview.themeforest.net/item/hosco-dentist-medical-landing-page/full_screen_preview/29714646",
    display: "themeforest.net/item/hosco-dentist...",
    icon: <FaUserMd size={36} color="#fff" />,
    desc: "Elegant landing pages for medical professionals.",
    bgImage:
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "GOLD",
    industry: "Agriculture / FMCG",
    website: "http://www.msfruits.in",
    display: "msfruits.in",
    icon: <FaSeedling size={36} color="#fff" />,
    desc: "Fresh solutions for agriculture and FMCG.",
    bgImage:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "GOLD",
    industry: "Office Supplies",
    website: "http://www.officewallah.in",
    display: "officewallah.in",
    icon: <FaBuilding size={36} color="#fff" />,
    desc: "Efficient office supply management online.",
    bgImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "GOLD",
    industry: "Education",
    website: "https://techtideweb.netlify.app/",
    display: "techtideweb.netlify.app",
    icon: <FaChalkboardTeacher size={36} color="#fff" />,
    desc: "Empowering education with digital tools.",
    bgImage:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
  },
];

export default function WebClient() {
  return (
    <section id="web-client" className="web-client-section">
      <div className="custom-container">
        <div className="section-heading-wrapper">
          <h2 className="section-title">Client Work & Portfolio Highlights</h2>
          <p className="byline">
            We take pride in having delivered robust solutions for a variety of industries:
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="web-client-carousel"
        >
          {clients.map((client, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`client-card client-card-${client.category.toLowerCase()} fade-in-card`}
                style={{
                  backgroundImage: `url(${client.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  zIndex: 1,
                  minHeight: '320px',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'stretch',
                }}
              >
                <div className="client-card-overlay">
                  <div className="client-icon">{client.icon}</div>
                  <div className="client-category">{client.category}</div>
                  <div className="client-industry">{client.industry}</div>
                  <div className="client-desc">{client.desc}</div>
                  <a
                    href={client.website}
                    className="client-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {client.display}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 