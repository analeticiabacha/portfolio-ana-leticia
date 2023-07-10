import React from "react";
import { ContainerCard, Title, DivFront, DivBack } from "./Styles"

const Cards = ({children}) => {

    return(
        <ContainerCard>
            
            <DivFront>
                <Title>{children}</Title>
                Front
            </DivFront>
            <DivBack>
                Back
            </DivBack>
        </ContainerCard>
    )
}

export default Cards;