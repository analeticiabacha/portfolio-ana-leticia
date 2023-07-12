import React from "react";
import { Container } from "./Styles";
import Cards from "../../components/Cards/Cards";
import Data from "../../data.json";

const Projects = () => {

    return(
        <Container>
            
            {Data.map(project => <Cards project={project}/>)}

        </Container>
    )
}
export default Projects;