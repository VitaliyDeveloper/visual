import styled from 'styled-components';
import photo from '../../img/photo.jpg';

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--some-white-color);
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: var(--some-white-color); */
`;

export const Photo = styled.div`
  background: url(${photo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 500px;
  margin: 50px;
  border-radius: 20px;
  box-shadow: -5px -5px 20px var(--accent-color);
`;

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: var(--accent-color);
`;

export const DescripContainer = styled.div`
  color: var(--some-white-color);
`;

export const Title = styled.h1`
  text-align: end;
  font-size: 80px;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  text-align: end;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const Descrip = styled.p`
  font-size: 18px;
  line-height: 1.2;
  text-align: start;
`;
