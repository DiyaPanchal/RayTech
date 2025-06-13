import '../css/graphicdetails.css';

const GraphicDetails = () => {
  return (
    <div className="graphic-details-section">
      <div className="graphic-section-heading-wrapper">
        <h1 className="graphic-main-title">Graphic Design</h1>
      </div>
      <div className="graphic-why-section">
       
        <p className="graphic-byline">
          In an age where visual content dominates, compelling design is a <strong>strategic business investment</strong>. Whether you're building a brand, launching a product, or running a campaign, good design builds trust, engagement, and conversion.
        </p>
        <h3 className="graphic-subsection-title">Key Benefits</h3>
        <ul className="graphic-quality-list">
          <li>
            <strong>Brand Recognition</strong><br />
            Create memorable logos and consistent visual identity across all platforms. It's the foundation of your brand's personality.
          </li>
          <li>
            <strong>Customer Engagement</strong><br />
            Well-designed banners, social media posts, brochures, and flyers grab attention and drive action.
          </li>
          <li>
            <strong>Competitive Advantage</strong><br />
            Brands with refined visual presentation outperform their competition in customer retention and marketing ROI.
          </li>
          <li>
            <strong>Communication Efficiency</strong><br />
            A single visual can convey messages that would take paragraphs to write. Design enhances clarity and emotion.
          </li>
          <li>
            <strong>Marketing Success</strong><br />
            Campaigns with strong graphics generate higher impressions, engagement, and conversions.
          </li>
        </ul>
      </div>
      <hr className="graphic-section-divider" />
      <section className="graphic-who-needs-section">
        <div className="graphic-section-heading-wrapper">
          <h2 className="graphic-section-title">Target Audience</h2>
          <p className="graphic-byline">Graphic design is essential for businesses, professionals, and organizations looking to stand out and connect with their audience.</p>
        </div>
        <ul className="graphic-who-needs-list">
          <li>Startups &amp; Small Businesses</li>
          <li>Dental Clinics &amp; Healthcare Professionals</li>
          <li>Fashion Brands &amp; E-commerce Stores</li>
          <li>Educational Institutes &amp; NGOs</li>
          <li>IT Firms, Event Planners, and Real Estate Agents</li>
        </ul>
      </section>
      <hr className="graphic-section-divider" />
      <section className="graphic-experts-section">
        <div className="graphic-section-heading-wrapper">
          <h2 className="graphic-section-title">Design Tools & Platforms</h2>
          <p className="graphic-byline">We leverage industry-leading tools and creative expertise to deliver pixel-perfect, impactful graphic design solutions for your brand.</p>
        </div>
        <h3 className="graphic-tools-title">Tools &amp; Platforms We Use:</h3>
        <ul className="graphic-tools-list">
          <li>Adobe Photoshop, Illustrator, InDesign</li>
          <li>Figma, Canva Pro, CorelDRAW</li>
          <li>Adobe XD, After Effects</li>
          <li>Premiere Pro for video content</li>
        </ul>
      </section>
      <hr className="graphic-section-divider" />
      <section className="graphic-core-services-section">
        <div className="graphic-section-heading-wrapper">
          <h2 className="graphic-section-title">Core Services</h2>
          <p className="graphic-byline">Comprehensive graphic design solutions tailored to your brand and business needs.</p>
        </div>
        <div className="graphic-services-table-wrapper">
          <table className="graphic-services-table">
            <thead>
              <tr>
                <th>Service Category</th>
                <th>What You Get</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Logo Design</strong></td>
                <td>Multiple concepts, brand guideline support</td>
              </tr>
              <tr>
                <td><strong>Brand Identity</strong></td>
                <td>Business cards, letterheads, envelopes</td>
              </tr>
              <tr>
                <td><strong>Marketing Collateral</strong></td>
                <td>Flyers, brochures, banners</td>
              </tr>
              <tr>
                <td><strong>Social Media Graphics</strong></td>
                <td>Instagram posts, reels thumbnails, ads</td>
              </tr>
              <tr>
                <td><strong>UI/UX &amp; App Screens</strong></td>
                <td>Prototyping, wireframing, design systems</td>
              </tr>
              <tr>
                <td><strong>Pitch Decks &amp; Presentations</strong></td>
                <td>Corporate decks, infographics, slide animations</td>
              </tr>
              <tr>
                <td><strong>Packaging Design</strong></td>
                <td>Labels, pouches, box designs</td>
              </tr>
              <tr>
                <td><strong>Motion Graphics</strong></td>
                <td>Logo animations, promo videos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default GraphicDetails; 