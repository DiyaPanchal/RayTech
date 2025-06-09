import { useParams } from 'react-router-dom';
import Pricing from '../components/Pricing';
import WebDevelopment from '../components/ServiceDetails/WebDevelopment';

const ServiceDetails = () => {
  const { serviceType } = useParams();

  // Function to get the appropriate detail component based on service type
  const getServiceDetailComponent = () => {
    switch (serviceType) {
      case 'website-design-development':
        return <WebDevelopment />;
      // Add more cases for other services
      default:
        return <div>Service details not found</div>;
    }
  };

  return (
    <div className="service-details-page">
      {getServiceDetailComponent()}
      <Pricing />
    </div>
  );
};

export default ServiceDetails; 