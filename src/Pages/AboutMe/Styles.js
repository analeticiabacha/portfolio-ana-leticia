import styled from "styled-components";

import { devices } from "../../style/device";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  margin-bottom: 0;

  @media${devices.tablet}{
    min-height: 77vh;
  }
`;

export const DivAboutPurple = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #7140db;
  padding: 20px;
  gap: 20px;
  padding-top: 2rem;

  @media${devices.tablet}{
    width: 100%;
    min-height: 300px;
  }
`;

export const DivAboutText = styled.div`
  padding: 20px;
  p{
    @media${devices.tablet}{
     text-transform: uppercase;
    }
  }
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const H1 = styled.p`
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: 20px;
  margin-right: 2px;


  @media${devices.tablet}{
    margin-right: 5px;
    font-size: 25px;
  }
`;

export const H3 = styled.p`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "default")};
  font-size: ${(props) => props.fontSize || "18px"};
  text-align: left;
  line-height: 1.1;
  margin-top: 10px;
  
  @media${devices.tablet}{
    text-align: justify;
  }

  &.default {
    margin-top: 0px;
  }

`;

export const DivInfos = styled.div`
  display: flex;
  background-color: #ece4fd;
  @media${devices.tablet}{
    width: 100%;
  }
`;

export const ContainerLeft = styled.div`
  padding: 20px;
  display: flex;
  width: 60%;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;

  @media${devices.tablet}{
    height: 50px;
    padding-left: 12rem;
  }

`;

export const ContainerRight = styled.div`
  margin-top: 50px;
  
  @media${devices.tablet}{
    height: 20px;
    display: flex;
    justify-content: center;
  }
`;

export const DivImg = styled.div`
  width: 90%;

  @media${devices.tablet}{
    width: 50%;
  }
`;

export const ProfileImageTwo = styled.img`
  border-radius: 50%;
  width: 100%;
`;

export const Hat = styled.img`
  height: 30px;
  width: 40px;
`;

export const Icons = styled.img`
  width: 250px;
`;

export const DivHat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;

`;

export const DivPortifolio = styled.div`
  p{
    margin: 2rem;
    text-align: center;
  }
 
`