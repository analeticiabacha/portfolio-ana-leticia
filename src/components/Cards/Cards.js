import React from "react";
import { ContainerCard, Title, DivFront, DivBack, Button } from "./Styles"

const Cards = ({children}) => {

    return(
        <ContainerCard>
            
            <DivFront>
                <Title>{children}</Title>
            </DivFront>
            <DivBack>
                
                <Button>SAIBA MAIS</Button>
            </DivBack>
        </ContainerCard>
    )
}

export default Cards;