import React from "react";
import ProfileImage from "../../Img/img2.png";
import HatIcon from "../../Img/chapeu.png";
import ImgIcons from "../../Img/icons.png";
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
  DivImg
} from "./Styles";

const AboutMe = () => {
  return (
    <Container id="sobre-mim">
      <DivAboutPurple>
        <DivTitle>
          <H1 color="#FFFFFF">OLÁ, EU SOU A </H1>{" "}
          <H1 color="#2F0786"> ANA LETICIA</H1>
          <H1 color="#FFFFFF">!</H1>
        </DivTitle>
        <DivAboutText>
          <H3 color="#DCCCFF">
            SOU UMA PROFISSIONAL APAIXONADA PELA INTERSEÇÃO ENTRE ENGENHARIA E
            DESENVOLVIMENTO WEB. COM UMA SÓLIDA FORMAÇÃO EM ENGENHARIA BIOMÉDICA
            E EXPERIÊNCIA PRÉVIA EM UMA EMPRESA DE SOFTWARE PARA HOSPITAIS,
            TENHO ADQUIRIDO HABILIDADES VALIOSAS NA COMPREENSÃO DAS NECESSIDADES
            DOS CLIENTES E NA SUA TRADUÇÃO EM SOLUÇÕES EFICAZES.
          </H3>
          <H3 color="#2F0786">
            ESTOU ANSIOSA PARA FAZER PARTE DE PROJETOS INOVADORES E COLABORAR EM
            CRIAR SOLUÇÕES QUE IMPACTAM POSITIVAMENTE A VIDA DAS PESSOAS.
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
          <H3 color="#2F0786" bold>EXPLORE MEU PORTFÓLIO E CONHEÇA MELHOR MEU TRABALHO.</H3>
        </ContainerLeft>
        <ContainerRight>
          <DivImg>
            <ProfileImageTwo src={ProfileImage}/>
          </DivImg>
        </ContainerRight>
      </DivInfos>
    </Container>
  );
};

export default AboutMe;
