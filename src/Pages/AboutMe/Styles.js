import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  min-height: 100vh;
`;

export const DivAboutPurple = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #7140db;
  width: 100%;
  min-height: 300px;
  padding: 20px;
  gap: 20px;
`;

export const DivAboutText = styled.div`
  padding: 20px;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const H1 = styled.p`
  color: ${(props) => props.color};
  font-weight: bold;
  margin-right: 5px;
  font-size: 25px;
`;

export const H3 = styled.p`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "default")};
  font-size: ${(props) => props.fontSize || "18px"};
  text-align: justify;
  line-height: 1.1;
  margin-top: 10px;

  &.default {
    margin-top: 0px;
  }


`;

export const DivInfos = styled.div`
  display: flex;
  background-color: #ece4fd;
  width: 100%;

`;

export const ContainerLeft = styled.div`
  padding: 20px;
  display: flex;
  width: 60%;
  flex-direction: column;
  gap: 20px;
  height: 50px;
  justify-content: space-between;

`;

export const ContainerRight = styled.div`
  width: 40%;
  margin-top: 20px;
`;

export const DivImg = styled.div`
  width: 90%;
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
`;
