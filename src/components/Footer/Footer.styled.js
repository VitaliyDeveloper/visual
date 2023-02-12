import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: start;
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;
  text-align: center;
  color: var(--accent-color);
  /* background-color: rgba(255, 255, 255, 0); */
  /* border-top: 2px solid var(--accent-color); */
`;

export const Address = styled.address`
  padding: 10px;
`;

export const Name = styled.p`
  padding: 10px;
`;

export const Copy = styled.p`
  padding: 10px;
`;
