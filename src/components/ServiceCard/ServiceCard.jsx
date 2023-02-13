import { ServiceItem, Title, List, Item, Price } from './ServiceCard.styled';

export const ServiceCard = ({ offer }) => {
  return (
    <ServiceItem key={offer.id}>
      <div>
        <Title className="hoverColor">{offer.title}</Title>
        {offer.subtitle && <p className="hoverColor">{offer.subtitle}</p>}
      </div>
      <List>
        {offer.task1 && <Item>{offer.task1}</Item>}
        {offer.task2 && <Item>{offer.task2}</Item>}
        {offer.task3 && <Item>{offer.task3}</Item>}
        {offer.task4 && <Item>{offer.task4}</Item>}
      </List>
      <Price className="hoverColor">
        {offer.price} {offer.currency}
      </Price>
    </ServiceItem>
  );
};
