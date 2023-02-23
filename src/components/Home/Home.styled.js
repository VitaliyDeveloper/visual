import styled from 'styled-components';
// import photo from '../../img/photo.jpg';
import photoMain from '../../img/photoMain.jpg';

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--some-white-color);
  pointer-events: none;

  overflow-y: auto;
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 769px) {
    height: 50vh;
  }
`;

// export const Photo = styled.div`
//   background: url(${photo});
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   width: 300px;
//   height: 500px;
//   margin: 50px;
//   border-radius: 20px;
//   box-shadow: -5px -5px 20px var(--accent-color);
// `;

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 40px;
  background-color: var(--second-color);
  @media screen and (max-width: 769px) {
    height: 100vh;
    padding: 20px;
  }
`;

export const DescripContainer = styled.div`
  width: 500px;
  color: var(--some-white-color);
  overflow: hidden;
`;

export const Title = styled.h1`
  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
  /* font-family: 'Pacifico', sans-serif; */
  text-align: end;
  font-size: 70px;
  margin-bottom: 20px;

  animation: showRight 1500ms linear;

  @keyframes showRight {
    0% {
      opacity: 0;
      transform: translateX(200px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export const SubTitle = styled.h2`
  text-align: end;
  margin-bottom: 30px;
  font-size: 30px;
  transform-origin: 0% 0%;

  animation: showUp 1000ms linear;

  @keyframes showUp {
    0% {
      opacity: 0;
      transform: perspective(600px) rotateX(-90deg);
    }
    100% {
      opacity: 1;
      transform: perspective(600px) rotateX(0deg);
    }
  }
`;

export const DescripTextContainer = styled.div`
  text-align: center;
  min-height: 300px;
`;

export const Descrip = styled.div`
  /* text-align: center; */
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 10px;
  text-indent: 1.5em;
  text-align: start;
`;
