import styled from "styled-components";

import { devices } from "../../style/device";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Alinha as divs horizontalmente */
  align-items: center; /* Alinha as divs verticalmente */
  min-height: 100vh;
  gap:2rem;
  margin:1rem;

  @media${devices.tablet}{
    gap: 20px;
  }
`;
