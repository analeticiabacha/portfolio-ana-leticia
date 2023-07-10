import React from "react";
import { Container } from "./Styles";
import Cards from "../../components/Cards/Cards";

const Projects = () => {

    return(
        <Container>
            <Cards>Heaven Burger</Cards>
            <Cards>Social Network</Cards>
            <Cards>Data Lovers</Cards>
            <Cards>Cipher</Cards>
            <Cards>Movie Challenge</Cards>
            <Cards>MDLinks</Cards>
        </Container>
    )
}

export default Projects;