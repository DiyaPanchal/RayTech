import WebDetails from '../components/WebDetails';
import Pricing, { type PricingPackage } from '../components/Pricing';
import '../css/serviceDetails.css';

const webDevPackages: PricingPackage[] = [
  {
    name: 'GOLD',
    price: '11,999',
    usdPrice: '250',
    features: [
      'Responsive Design',
      'Up to 5 Pages',
      'Standard UI/UX Design',
      'Contact Form',
      'Mobile-Friendly Layout',
      'On-Page SEO',
      'Social Media Links',
      '1 Month Free Revision',
      'Delivery: 1 week',
    ],
  },
  {
    name: 'PLATINUM',
    price: '25,999',
    usdPrice: '500',
    features: [
      'All Features of Basic +',
      'Up to 10 Pages',
      'Enhanced UI/UX Design',
      'Custom Form Features',
      'CMS Integration',
      'Dynamic Contact Form',
      'Blog Setup',
      'Image Optimization',
      '3 Months Free Revisions',
      'Delivery: 1-2 week',
    ],
    featured: true,
    badgeText: 'Most Popular',
  },
  {
    name: 'DIAMOND',
    price: '45,999',
    usdPrice: '750',
    features: [
      'All Features of Standard +',
      'Unlimited Pages',
      'Advanced UI/UX Design',
      'Amazing Animations & Effects',
      'Custom Form Builders',
      'E-Commerce Integration',
      'Multi-Language Support',
      'Custom Web Applications',
      'Content Strategy',
      '6 Months Free Revision',
      'Delivery: 2-3 weeks',
    ],
  },
];

const WebDevelopmentPage = () => {
  return (
    <div className="service-details-page">
      <WebDetails />
      <Pricing packages={webDevPackages} />
    </div>
  );
};

export default WebDevelopmentPage; 