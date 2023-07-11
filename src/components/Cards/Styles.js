import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    flex-direction: column;
    width:400px;
    height:290px;
    /* background-color: #2F0786; */

    /*flip dos cards*/
    position: relative;
    
`;

export const Title = styled.p`
    color: #DCCCFF;
    font-size: 30px;
`;

export const DivFront = styled.div`
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
    background-color: #2F0786;
    border-radius: 20px;
    cursor: pointer;
    /* transition: transform 1000ms; */
    /* &:hover{
        transform: rotateY(180deg);
    } */
`;

export const DivBack = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #663AC7;
    border-radius: 20px;
    
    /*flip dos cards*/
    position: absolute;
    /* -webkit-backface-visibility: hidden;
    backface-visibility: hidden; */
    /* background-color: red; */
    /* transform: rotateY(180deg); */
    visibility: hidden;
    ${ContainerCard}:hover & {
        visibility: visible;
    }
   
    
`;

export const Button = styled.button`
    width: 132px;
    height: 47px;
    margin-right:20px;
    background-color: #ECE4FD;
    border-radius: 20px;
    border: 3px solid #663AC7;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    color: #7140DB;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
`;