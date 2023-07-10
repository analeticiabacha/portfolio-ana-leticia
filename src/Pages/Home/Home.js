import React from "react";
import Header from "../../components/Header/Header";
import ProfileOne from "../../Img/img1.png";
import { Container, DivText, H2, H3, DivImg, ProfileImage } from "./Styles";

const Home = () => {

    return(
        <>
            <Header></Header>
            <Container>
                <DivText>
                    <H2>DESENVOLVEDORA FRONT-END E ENGENHEIRA</H2>
                    <H3>EU PROJETO E CODIFICO IDEIAS</H3>
                </DivText>
                <DivImg>
                    <ProfileImage src={ProfileOne}/>

                </DivImg>
            </Container>
        </>
    )
}

export default Home;