import ErpDetails from '../components/ErpDetails';
import Pricing, { type PricingPackage } from '../components/Pricing';
import Layout from '../components/Layout';
import '../css/serviceDetails.css';

const erpMonthlyPackages: PricingPackage[] = [
  {
    name: 'Gold',
    price: '2,500',
    usdPrice: '/Month',
    features: [
      'Basic ERP Modules',
      'Up to 5 Users',
      '1–2 Modules',
    ],
  },
  {
    name: 'Platinum',
    price: '3,800',
    usdPrice: '/Month',
    features: [
      'Intermediate Modules and CRM',
      'Up to 15 Users',
      '3–4 Modules',
    ],
    featured: true,
    badgeText: 'Most Popular',
  },
  {
    name: 'Diamond',
    price: '6,000',
    usdPrice: '/Month',
    features: [
      'Full ERP Suite and Mobile App',
      'Unlimited Users',
      'All Modules',
    ],
  },
];

const erpLifetimePackages: PricingPackage[] = [
  {
    name: 'Gold',
    price: '1.75 Lakhs',
    usdPrice: 'One Time',
    features: [
      'Single Module (e.g., HRM or Sales)',
      'Best for focused teams',
    ],
  },
  {
    name: 'Platinum',
    price: '2.75 Lakhs',
    usdPrice: 'One Time',
    features: [
      '2 Modules (HRM and Sales)',
      'Best for scaling businesses',
    ],
    featured: true,
    badgeText: 'Best Value',
  },
  {
    name: 'Diamond',
    price: '4.5 Lakhs',
    usdPrice: 'One Time',
    features: [
      'All Modules (HRM, Sales and Inventory)',
      'Enterprise ready',
    ],
  },
];

const ErpSolutionsPage = () => {
  return (
    <Layout>
      <div className="service-details-page">
        <ErpDetails />
        <div className="custom-container">
          <Pricing 
            packages={erpMonthlyPackages} 
            heading="Monthly Subscription Plans"
            note="Custom ERP Pricing available for unique industries or cross-domain deployments." 
          />
          <Pricing 
            packages={erpLifetimePackages} 
            heading="Lifetime Plans White Label ERP"
            note="Custom ERP Pricing available for unique industries or cross-domain deployments." 
          />
        </div>
      </div>
    </Layout>
  );
};

export default ErpSolutionsPage; 