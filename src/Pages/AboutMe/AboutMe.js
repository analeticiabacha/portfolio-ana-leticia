import React from "react";

import HatIcon from "../../Img/chapeu.png";
import ImgIcons from "../../Img/icons.png";
import ProfileImage from "../../Img/img2.png";

import {
  H1,
  H3,
  Hat,
  Icons,
  Container,
  DivAboutPurple,
  DivInfos,
  DivTitle,
  DivAboutText,
  ContainerLeft,
  ContainerRight,
  ProfileImageTwo,
  DivHat,
  DivImg, 
  DivPortifolio
} from "./Styles";

const AboutMe = () => {
  return (
    <>
    <Container id="sobre-mim">
      <DivAboutPurple>
        <DivTitle>
          <H1 color="#FFFFFF">OLÁ, EU SOU A&nbsp;</H1>
          <H1 color="#2F0786">ANA LETICIA</H1>
          <H1 color="#FFFFFF">!</H1>
        </DivTitle>
        <DivAboutText>
          <H3 color="#DCCCFF">
            Sou uma profissional apaixonada pela interseção entre engenharia e desenvolvimento web. Com uma sólida formação em engenharia biomédica e experiência prévia em uma empresa de software para hospitais, tenho adquirido habilidades valiosas na compreensão das necessidades dos clientes e na sua tradução em soluções eficazes.
          </H3>
          <H3 color="#2F0786">
           Estou ansiosa para fazer parte de projetos inovadores e colaborar em criar soluções que impactam positivamente a vida das pessoas.
          </H3>
        </DivAboutText>
      </DivAboutPurple>
      <DivInfos>
        <ContainerLeft>
          <H3 color="#7140DB" bold>SOBRE MIM</H3>
          
          <DivHat>
            <Hat src={HatIcon} />
            <div>
              <H3 color="#1A3871" bold fontSize="16px">ENGENHEIRA BIOMÉDICA</H3>
              <H3 color="#1A3871" fontSize="14px" className="default">INSTITUTO NACIONAL DE TELECOMUNICAÇÕES - INATEL </H3>
            </div>
          </DivHat>

          <DivHat>
            <Hat src={HatIcon} />
            <div>
              <H3 color="#1A3871" bold fontSize="16px">DESENVOLVEDORA WEB</H3>
              <H3 color="#1A3871" fontSize="14px" className="default">LABORATÓRIA BRASIL</H3>
            </div>
          </DivHat>

          <H3 color="#7140DB" bold>TECNOLOGIAS</H3>
          <Icons src={ImgIcons}/>
        
        </ContainerLeft>
        <ContainerRight>
          <DivImg>
            <ProfileImageTwo src={ProfileImage}/>
          </DivImg>
        </ContainerRight>
      </DivInfos>

    </Container>
    <DivPortifolio>
      <H3 color="#2F0786" bold>EXPLORE MEU PORTFÓLIO E CONHEÇA MELHOR MEU TRABALHO.</H3>

    </DivPortifolio>
    </>

  );
};

export default AboutMe;
