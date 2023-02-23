import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1000;
`;

export const Photo = styled.img`
  max-width: 90vh;
  max-height: 90vh;
`;
