import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay} from "swiper/modules";
import { FaPalette, FaBullhorn, FaBoxOpen } from "react-icons/fa";
import "../css/webclient.css";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper as SwiperType } from "swiper";

const graphicClients = [
  {
    title: "Startup Branding : Bonosh – Health Food Brand Design",
    url: "https://almondbranding.com/portfolio/bonosh-health-brand-design-startup-branding/",
    display: "almondbranding.com/portfolio/bonosh-health-brand-design-startup-branding/",
    icon: <FaPalette size={36} color="#fff" />, 
    desc: "Branding and design for Bonosh, a health food startup.",
    category: "Branding",
    bgImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D", // product branding (bottles/labels)
  },
  {
    title: "Social Media Campaign : KA Festive Edit Grid – Social Media Campaign",
    url: "https://www.thecreativeone.co/portfolio",
    display: "thecreativeone.co/portfolio",
    icon: <FaBullhorn size={36} color="#fff" />, 
    desc: "Festive social media campaign for KA.",
    category: "Social Media",
    bgImage: "https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww", // social media
  },
  {
    title: "Product Packaging : Kajavarnam Saree Packaging",
    url: "https://oneandonlydesign.in/portfolio-oneonly-design/packaging/",
    display: "oneandonlydesign.in/portfolio-oneonly-design/packaging/",
    icon: <FaBoxOpen size={36} color="#fff" />, 
    desc: "Product packaging design for Kajavarnam Sarees.",
    category: "Packaging",
    bgImage: "https://plus.unsplash.com/premium_photo-1724762183986-39f29bbb160e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNhcmVlfGVufDB8fDB8fHww", // vegetables/produce
  },
  {
    title: "Startup Branding : Bonosh – Health Food Brand Design",
    url: "https://almondbranding.com/portfolio/bonosh-health-brand-design-startup-branding/",
    display: "almondbranding.com/portfolio/bonosh-health-brand-design-startup-branding/",
    icon: <FaPalette size={36} color="#fff" />, 
    desc: "Branding and design for Bonosh, a health food startup.",
    category: "Branding",
    bgImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Social Media Campaign : KA Festive Edit Grid – Social Media Campaign",
    url: "https://www.thecreativeone.co/portfolio",
    display: "thecreativeone.co/portfolio",
    icon: <FaBullhorn size={36} color="#fff" />, 
    desc: "Festive social media campaign for KA.",
    category: "Social Media",
    bgImage: "https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww",
  },
  {
    title: "Product Packaging : Kajavarnam Saree Packaging",
    url: "https://oneandonlydesign.in/portfolio-oneonly-design/packaging/",
    display: "oneandonlydesign.in/portfolio-oneonly-design/packaging/",
    icon: <FaBoxOpen size={36} color="#fff" />, 
    desc: "Product packaging design for Kajavarnam Sarees.",
    category: "Packaging",
    bgImage: "https://plus.unsplash.com/premium_photo-1724762183986-39f29bbb160e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNhcmVlfGVufDB8fDB8fHww",
  },
];

export default function GraphicClient() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section id="graphic-client" className="web-client-section">
      <div className="custom-container">
        <div className="section-heading-wrapper">
          <h2 className="section-title">Client Work & Portfolio</h2>
           <p className="byline">
            We take pride in having delivered robust solutions for a variety of
            industries:
          </p>
        </div>
        <div className="swiper-container-wrapper">
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
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            className="web-client-carousel"
          >
            {graphicClients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`client-card fade-in-card`}
                  style={{
                    backgroundImage: `url(${client.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    zIndex: 1,
                    minHeight: "220px",
                    padding: 0,
                    display: "flex",
                    alignItems: "stretch",
                  }}
                >
                  <div className="client-card-overlay">
                    <div className="client-icon">{client.icon}</div>
                    <div className="client-category">{client.category}</div>
                    <div className="client-industry">{client.title}</div>
                    <div className="client-desc">{client.desc}</div>
                    <a
                      href={client.url}
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
          <span
            className="custom-swiper-chevron custom-swiper-chevron-left"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
            role="button"
            tabIndex={0}
          >
            <FiChevronLeft size={32} />
          </span>
          <span
            className="custom-swiper-chevron custom-swiper-chevron-right"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
            role="button"
            tabIndex={0}
          >
            <FiChevronRight size={32} />
          </span>
        </div>
      </div>
    </section>
  );
} 