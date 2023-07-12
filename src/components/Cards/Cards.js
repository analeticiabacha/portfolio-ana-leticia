import React from "react";
import { ContainerCard, Title, Info, DivFront, DivBack, Button, DivButton, ImgProject } from "./Styles"

const Cards = ({project}) => {

    return(
        <ContainerCard>
            
            <DivFront>
                <ImgProject src={project.img}/>
            </DivFront>
            <DivBack>
                <Title>{project.name}</Title>
                <Info>{project.description}</Info>
                <DivButton>
                    <Button href={project.website} target="_blank">WEBSITE</Button>
                    <Button href={project.repository} target="_blank">REPOSITÓRIO</Button>
                </DivButton>
            </DivBack>
        </ContainerCard>
    )
}

export default Cards;