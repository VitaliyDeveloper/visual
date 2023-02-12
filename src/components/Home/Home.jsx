import {
  HomeContainer,
  PhotoContainer,
  Photo,
  AboutMeContainer,
  DescripContainer,
  Title,
  SubTitle,
  Descrip,
} from './Home.styled';

export const Home = () => {
  return (
    <HomeContainer>
      <PhotoContainer>
        <Photo></Photo>
      </PhotoContainer>
      <AboutMeContainer>
        <DescripContainer>
          <Title>Нургуль Герасимова</Title>
          <SubTitle>Визуализатор/фотограф</SubTitle>
          <Descrip>
            Приветствую тебя! <br />Я собрала здесь свои знания и опыт, которые
            приобрела за много лет ведения своего блога в Инстаграм. <br /> Я
            допускала много ошибок, спотыкалась о подводные камни и методом проб
            и ошибок приобрела бесценный опыт, которым я готова делиться. <br />{' '}
            Моей главной мотивацией было - саморазвитие и помощь другим. <br />{' '}
            Желаю вам приятного прочтения и успехов в освоении новых знании.
          </Descrip>
        </DescripContainer>
      </AboutMeContainer>
    </HomeContainer>
  );
};
