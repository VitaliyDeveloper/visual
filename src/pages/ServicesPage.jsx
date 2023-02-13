import dbOffer from '../data_base/courses_data.json';

import { Services } from 'components/Services/Services';

export const ServicesPage = () => {
  return (
    <div>
      <Services dbOffer={dbOffer.offers} />
    </div>
  );
};
