import React from "react";
import { Container, H3, Email, Icons, Click, DivIcons } from "./Styles";
import LinkedinIcon from "../../Img/linkedin.png";
import GithubIcon from "../../Img/github.png";


const Contacts = () => {

    return(
        <Container id="contatos">
            <H3>ESTÁ INTERESSADO EM COLABORAR COMIGO? ENTRE EM CONTATO! </H3>
            <Email> ANALEBPRINCE@GMAIL.COM </Email>
            <DivIcons>
                <Click href="https://www.linkedin.com/in/analeticiabacha/" target="_blank">
                    <Icons src={LinkedinIcon}/>
                </Click>
                <Click href="https://github.com/analeticiabacha" target="_blank">
                    <Icons src={GithubIcon}/>
                </Click>
            </DivIcons>
        </Container>
    )
}

export default Contacts;