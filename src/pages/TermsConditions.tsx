import Layout from "../components/Layout";
import "../css/terms.css";

export default function TermsConditions() {
  return (
    <Layout>
      <div className="terms-container">
        <div className="terms-header">
          <h1>Terms & Conditions</h1>
          <p className="last-updated">Last updated: July 03, 2025</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website and services of Ray Tech Pvt. Ltd. ("Ray Tech," "we," "our," or "us"), 
              you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to 
              abide by the above, please do not use this service.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Description of Service</h2>
            <p>
              Ray Tech provides IT & Digital Services including but not limited to:
            </p>
            <ul>
              <li>Web Development and Design</li>
              <li>Graphic Design Services</li>
              <li>SEO and Digital Marketing</li>
              <li>ERP Solutions</li>
              <li>Consulting and Technical Support</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>3. User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account information</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>4. Payment Terms</h2>
            <h3>4.1 Pricing</h3>
            <p>
              All prices are quoted in Indian Rupees (INR) unless otherwise specified. Prices are subject to change 
              without prior notice.
            </p>

            <h3>4.2 Payment Schedule</h3>
            <p>
              Payment terms will be specified in individual project agreements. Typically, we require:
            </p>
            <ul>
              <li>50% advance payment before project commencement</li>
              <li>Remaining 50% upon project completion and delivery</li>
              <li>Additional milestones may be defined for larger projects</li>
            </ul>

            <h3>4.3 Late Payments</h3>
            <p>
              Late payments may result in suspension of services and may incur additional charges as specified 
              in the project agreement.
            </p>
          </section>

          <section className="terms-section">
            <h2>5. Project Terms</h2>
            <h3>5.1 Project Scope</h3>
            <p>
              Project scope, deliverables, and timelines will be clearly defined in written agreements. 
              Any changes to scope may result in additional charges and timeline adjustments.
            </p>

            <h3>5.2 Revisions and Changes</h3>
            <p>
              We include a reasonable number of revisions in our standard packages. Additional revisions 
              beyond the agreed scope may incur additional charges.
            </p>

            <h3>5.3 Project Delivery</h3>
            <p>
              We strive to deliver projects on time as specified in agreements. However, delays may occur 
              due to factors beyond our control. We will communicate any delays promptly.
            </p>
          </section>

          <section className="terms-section">
            <h2>6. Intellectual Property</h2>
            <h3>6.1 Client Ownership</h3>
            <p>
              Upon full payment, clients own the final deliverables created specifically for their project. 
              This includes custom designs, code, and content created exclusively for the client.
            </p>

            <h3>6.2 Ray Tech Rights</h3>
            <p>
              Ray Tech retains the right to:
            </p>
            <ul>
              <li>Use completed work in our portfolio</li>
              <li>Display work for marketing purposes</li>
              <li>Retain ownership of proprietary tools and frameworks</li>
              <li>Use generic code and design elements in other projects</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>7. Confidentiality</h2>
            <p>
              We respect the confidentiality of your business information and project details. We will not 
              disclose confidential information to third parties without your written consent, except as 
              required by law.
            </p>
          </section>

          <section className="terms-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              Ray Tech's liability is limited to the amount paid for the specific service. We are not liable 
              for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="terms-section">
            <h2>9. Warranty and Support</h2>
            <h3>9.1 Service Warranty</h3>
            <p>
              We provide a 30-day warranty period for web development projects, during which we will fix 
              any bugs or issues related to our work at no additional cost.
            </p>

            <h3>9.2 Ongoing Support</h3>
            <p>
              Ongoing support and maintenance services are available under separate agreements. Standard 
              warranty does not cover third-party integrations or client modifications.
            </p>
          </section>

          <section className="terms-section">
            <h2>10. Termination</h2>
            <p>
              Either party may terminate a project agreement with written notice. Upon termination:
            </p>
            <ul>
              <li>Client is responsible for payment of work completed</li>
              <li>Ray Tech will deliver completed work</li>
              <li>Confidentiality obligations remain in effect</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>11. Force Majeure</h2>
            <p>
              Neither party shall be liable for any delay or failure to perform due to circumstances beyond 
              their reasonable control, including but not limited to natural disasters, government actions, 
              or technical failures.
            </p>
          </section>

          <section className="terms-section">
            <h2>12. Governing Law</h2>
            <p>
              These terms and conditions are governed by the laws of India. Any disputes shall be resolved 
              in the courts of Ahmedabad, Gujarat, India.
            </p>
          </section>

          <section className="terms-section">
            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
            </p>
          </section>

          <section className="terms-section">
            <h2>14. Contact Information</h2>
            <p>
              For questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="legal-contact-info">
              <p><strong>Email:</strong> director.raytech@gmail.com</p>
              <p><strong>Phone:</strong> +91 91576 71794</p>
              <p><strong>Address:</strong> Ray Tech Pvt. Ltd., Ahmedabad, Gujarat, India</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
} 