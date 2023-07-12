import React from "react";
import { Container, Button, Navbar } from "./Styles"

const Header = () => {

    return(
        <Container>
            <Navbar>
                <Button href="#sobre-mim">SOBRE MIM</Button>
                <Button href="#projetos">PROJETOS</Button>
                <Button href="#contatos">CONTATOS</Button>
            </Navbar>
        </Container>
    )

}

export default Header;