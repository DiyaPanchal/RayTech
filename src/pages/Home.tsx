import Hero from "../components/Hero";
import About from "../components/Aboutus";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="home-container">
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <CallToAction />
        <Contact />
      </div>
    </Layout>
  );
};

