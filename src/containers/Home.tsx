import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/Aboutus";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../css/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

