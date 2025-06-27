import SeoDetails from '../components/SeoDetails';
import Pricing, { type PricingPackage } from '../components/Pricing';
import Layout from '../components/Layout';
import '../css/serviceDetails.css';

const seoPackages: PricingPackage[] = [
  {
    name: 'GOLD',
    price: '15,000',
    usdPrice: '$ 180',
    features: [
      'Keyword Research: ✓',
      'Page Optimization: 5 pages',
      'Technical Audit: Basic',
      'Local SEO Setup: -',
      'Backlinks: 5–10',
      'Monthly Reports: 1 Month',
      'Turnaround Time: 1 Week',
      'Support: Email',
    ],
  },
  {
    name: 'PLATINUM',
    price: '30,000',
    usdPrice: '$ 360',
    features: [
      'Keyword Research: ✓✓',
      'Page Optimization: 10 pages',
      'Technical Audit: Full',
      'Local SEO Setup: ✓',
      'Backlinks: 15–25',
      'Monthly Reports: 3 Months',
      'Turnaround Time: 2 Weeks',
      'Support: Email & Phone',
    ],
    featured: true,
    badgeText: 'Most Popular',
  },
  {
    name: 'DIAMOND',
    price: '50,000',
    usdPrice: '$ 600',
    features: [
      'Keyword Research: ✓✓✓',
      'Page Optimization: 20+ pages',
      'Technical Audit: Full + Fixes',
      'Local SEO Setup: ✓✓',
      'Backlinks: 50+',
      'Monthly Reports: 6 Months',
      'Turnaround Time: 3–4 Weeks',
      'Support: Dedicated SEO Manager',
    ],
  },
];

const SeoPage = () => {
  return (
    <Layout>
      <div className="service-details-page">
        <SeoDetails />
        <Pricing packages={seoPackages} note="Prices are indicative and may vary based on project scope and requirements." />
      </div>
    </Layout>
  );
};

export default SeoPage; 