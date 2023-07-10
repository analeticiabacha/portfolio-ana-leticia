import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    flex-direction: column;
    width:400px;
    height:290px;
    background-color: #2F0786;
    border-radius: 20px;

    /*flip dos cards*/
    position: relative;
    transform-style: preserve-3d;
`;

export const Title = styled.p`
    color: #DCCCFF;
    font-size: 30px;
`;

export const DivFront = styled.p`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    /*flip dos cards*/
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    transition: transform 1000ms;
    &:hover{
        transform: rotateY(180deg);
    }
`;

export const DivBack = styled.p`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    
    /*flip dos cards*/
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: red;
    transform: rotateY(180deg);
`;