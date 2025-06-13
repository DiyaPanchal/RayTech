import GraphicDetails from '../components/GraphicDetails';
import Pricing, { type PricingPackage } from '../components/Pricing';
import '../css/serviceDetails.css';

const graphicDesignPackages: PricingPackage[] = [
  {
    name: 'Gold Package',
    price: '7,999',
    usdPrice: '99',
    features: [
      'Premium Logo',
      '5 Social Posts',
      '2 Classic Banners',
    ],
  },
  {
    name: 'Platinum Package',
    price: '18,999',
    usdPrice: '350',
    features: [
      'Premium Logo',
      '10 Social Posts',
      'Brochure',
      'Visiting Card',
    ],
    featured: true,
    badgeText: 'Most Popular',
  },
  {
    name: 'Diamond',
    price: '45,999',
    usdPrice: '750',
    features: [
      'Complete Branding Kit',
      '20 Posts',
      'Animated Logo',
      'UI Kit',
    ],
  },
];

const GraphicDesignPage = () => {
  return (
    <div className="service-details-page">
      <GraphicDetails />
      <Pricing packages={graphicDesignPackages} />
    </div>
  );
};

export default GraphicDesignPage; 