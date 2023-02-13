import styled from 'styled-components';
import photo from '../../img/photo.jpg';
import photoMain from '../../img/photoMain.jpg';

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--some-white-color);
  pointer-events: none;
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${photoMain});
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
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
  padding: 40px;
  background-color: var(--accent-color);
`;

export const DescripContainer = styled.div`
  width: 500px;
  color: var(--some-white-color);
`;

export const Title = styled.h1`
  /* font-family: 'Pacifico', sans-serif; */
  text-align: end;
  font-size: 70px;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  text-align: end;
  margin-bottom: 30px;
  font-size: 30px;
`;

export const DescripTextContainer = styled.div`
  text-align: center;
`;

export const Descrip = styled.div`
  /* text-align: center; */
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 10px;
  text-indent: 1.5em;
  text-align: start;
`;
