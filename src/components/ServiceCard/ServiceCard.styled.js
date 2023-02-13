import styled from 'styled-components';

export const ServiceItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 300px;
  margin: 20px;
  border: 2px solid var(--second-color);
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: 300ms linear;

  :hover {
    border-color: var(--accent-color);
    scale: 1.05;
  }

  :hover .hoverColor {
    color: var(--accent-color);
  }
`;

export const Title = styled.h3`
  font-size: 25px;
  color: var(--second-color);
  text-align: center;
  transition: 300ms linear;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 20px;
  color: var(--second-color);
  transition: 300ms linear;
`;

export const List = styled.ul`
  padding: 10px;
`;

export const Item = styled.li`
  text-align: start;
  line-height: 1.5;
`;

export const Price = styled.p`
  font-size: 30px;
  text-align: end;
  font-weight: bold;
  color: var(--second-color);
  transition: 300ms linear;
`;
