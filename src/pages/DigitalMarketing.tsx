import DigitalMarketingDetails from '../components/DigitalMarketingDetails';
import Pricing, { type PricingPackage } from '../components/Pricing';
import Layout from '../components/Layout';
import '../css/serviceDetails.css';

const digitalMarketingPackages: PricingPackage[] = [
  {
    name: 'GOLD',
    price: '14,999',
    usdPrice: '/month',
    features: [
      'Platforms Managed: 2 (e.g., FB & Insta)',
      'Ad Spend Suggestion: ₹5K–10K',
      'Creatives/Month: 10',
      'Campaign Types: Awareness',
      'Reports: Monthly',
      'Consultation: Basic',
    ],
  },
  {
    name: 'PLATINUM',
    price: '28,999',
    usdPrice: '/month',
    features: [
      'Platforms Managed: 3–4',
      'Ad Spend Suggestion: ₹10K–25K',
      'Creatives/Month: 20',
      'Campaign Types: Awareness + Leads',
      'Reports: Bi-weekly',
      'Consultation: Strategy Planning',
    ],
    featured: true,
    badgeText: 'Most Popular',
  },
  {
    name: 'DIAMOND',
    price: '75,999',
    usdPrice: '/month',
    features: [
      'Platforms Managed: Full Suite (SMM, SEM, Email)',
      'Ad Spend Suggestion: ₹25K+',
      'Creatives/Month: 30+',
      'Campaign Types: Leads + Sales + Retargeting',
      'Reports: Weekly + Dashboard Access',
      'Consultation: Dedicated Campaign Manager',
    ],
  },
];

const DigitalMarketingPage = () => {
  return (
    <Layout>
      <div className="service-details-page">
        <DigitalMarketingDetails />
        <Pricing packages={digitalMarketingPackages} note="Ad budget not included in above pricing." />
      </div>
    </Layout>
  );
};

export default DigitalMarketingPage; 