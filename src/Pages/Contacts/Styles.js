import styled from "styled-components";

import { devices } from "../../style/device";

export const Container = styled.div`
  background-color: #4916B8;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items:center;
  justify-content: center;
  margin-top: 15px;
  padding: 15px;
  @media${devices.tablet}{
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const H3 = styled.h3`
    font-weight: 900;
    font-size: 20px;
    color: white;
    margin-top: 25px;
    text-align: center;
    line-height: 1.5rem;

    @media${devices.tablet}{
        text-align: justify;
    }
`;

export const Email = styled.p`
    font-size: 15px;
    color: white;

`;

export const Icons = styled.img`
    width: 40px;
    margin-bottom: 15px;
`;

export const Click = styled.a`
    

`;

export const DivIcons = styled.div`
    
    background-color: none;
    display: flex;
    flex-direction: row;
    gap: 15px;
`;
