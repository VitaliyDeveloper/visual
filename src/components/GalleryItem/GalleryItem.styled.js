import styled from 'styled-components';

export const GalleryItemStyle = styled.li`
  width: 300px;
  height: 300px;
  margin: 20px;
  transition: 250ms linear;
  box-shadow: -10px -10px 0 var(--second-color);
  cursor: pointer;

  :hover {
    box-shadow: 10px 10px 0 var(--accent-color);
    scale: 1.1;
  }
`;

export const Photo = styled.img`
  min-width: 300px;
  min-height: 300px;
`;
