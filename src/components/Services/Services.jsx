import { ServicesContainer, ServiceList } from './Services.styled';

import { ServiceCard } from 'components/ServiceCard/ServiceCard';

export const Services = ({ dbOffer }) => {
  return (
    <ServicesContainer>
      <ServiceList>
        {dbOffer.map(offer => (
          <ServiceCard offer={offer} key={offer.id} />
        ))}
      </ServiceList>
    </ServicesContainer>
  );
};
