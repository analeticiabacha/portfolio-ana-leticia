import styled from "styled-components";

import { devices } from "../../style/device";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    flex-direction: column;
    gap: 50px;

    @media${devices.tablet}{
        min-height: calc(100vh - 50px);
        margin-bottom: 0;
    }
`;

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    margin-top: 3rem

    @media${devices.tablet}{
        margin-top:70px;
    }
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


