import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: calc(100vh - 50px);
    flex-direction: column;
    gap: 50px;
`;

export const DivText = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
`;

export const H2 = styled.p`
    color: #1A3871;
    font-weight: bold;
    font-size: 20px;
`;

export const H3 = styled.p`
    color: #663AC7;
    font-weight: bold;
`;

export const ProfileImage = styled.img`
    border-radius: 50%;
    width: 100%;
`;

export const DivImg = styled.div`
    width: 420px;
    
    @media (max-width: 800px){
        width: 290px;
    }
`;


