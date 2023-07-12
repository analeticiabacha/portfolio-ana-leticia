import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width:400px;
    height:290px;
    /* background-color: #2F0786; */
    border: 8px solid #2F0786;
    /*flip dos cards*/
    position: relative;
    border-radius: 20px;
`;

export const Title = styled.p`
    color: white;
    font-size: 30px;
`;

export const ImgProject = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
   
`;

export const DivFront = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #2F0786;
    border-radius: 10px;
    cursor: pointer;
`;

export const DivBack = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #2F0786;
    position: absolute;
    visibility: hidden;
    
    ${ContainerCard}:hover & {
        visibility: visible;
    }
   
    
`;

export const Button = styled.a`
    width: 132px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
    background-color: #ECE4FD;
    border-radius: 20px;
    border: 3px solid #663AC7;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    color: #7140DB;
    font-weight: bold;
    font-size: 12px;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
        
    }
`;

export const DivButton = styled.button`
    display: flex;
    flex-direction: row;
    background-color: transparent;
    border: none;
`;

export const Info = styled.p`
    color: #DCCCFF;
    font-size: 20px;
    text-align: center;
    padding: 5px 30px;
`;