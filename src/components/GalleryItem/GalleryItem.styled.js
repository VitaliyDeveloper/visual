import styled from 'styled-components';

export const GalleryItemStyle = styled.li`
  width: 300px;
  height: 300px;
  margin: 20px;
  transition: 250ms linear;
  border: none;
  border-radius: 20px;
  box-shadow: -5px -5px 10px var(--second-color);

  cursor: pointer;

  :hover {
    box-shadow: 5px 5px 10px var(--accent-color);
    scale: 1.1;
  }

  animation: fadeInUp;
  animation-duration: 1.5s;
`;

export const Photo = styled.img`
  border-radius: 20px;
  min-width: 300px;
  min-height: 300px;
`;
