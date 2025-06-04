import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import "../css/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_2wbl68l",
        "template_1nhaprd",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "director.raytech@gmail.com",
        },
        "65J5NGce2GRAcC56a"
      );

      if (result.status === 200) {
        toast.success("Your message has been sent successfully!", {
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="custom-container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="row g-4 justify-content-between">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows={4}
                  placeholder="Your message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
          <div className="col-lg-5">
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon-wrapper">
                  <HiMail className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>director.raytech@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-wrapper">
                  <HiPhone className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+91 91576 71794</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-wrapper">
                  <HiLocationMarker className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>Ahmedabad, Gujarat</p>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717963463!2d72.43965503418377!3d23.020497766767125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710097547943!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 