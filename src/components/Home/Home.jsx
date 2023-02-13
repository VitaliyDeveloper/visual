import {
  HomeContainer,
  PhotoContainer,
  // Photo,
  AboutMeContainer,
  DescripContainer,
  Title,
  SubTitle,
  DescripTextContainer,
  Descrip,
} from './Home.styled';

export const Home = () => {
  return (
    <HomeContainer>
      <PhotoContainer>{/* <Photo></Photo> */}</PhotoContainer>
      <AboutMeContainer>
        <DescripContainer>
          <Title>Нургуль Герасимова</Title>
          <SubTitle>Визуализатор/фотограф</SubTitle>
          <DescripTextContainer>
            <Descrip>Приветствую тебя!</Descrip>
            <Descrip>
              Я собрала здесь свои знания и опыт, которые приобрела за много лет
              ведения своего блога в Инстаграм.
            </Descrip>
            <Descrip>
              Я допускала много ошибок, спотыкалась о подводные камни и методом
              проб и ошибок приобрела бесценный опыт, которым я готова делиться.
            </Descrip>
            <Descrip>
              Моей главной мотивацией было - саморазвитие и помощь другим.
            </Descrip>
            <Descrip>
              Желаю вам приятного прочтения и успехов в освоении новых знании.
            </Descrip>
          </DescripTextContainer>
        </DescripContainer>
      </AboutMeContainer>
    </HomeContainer>
  );
};
