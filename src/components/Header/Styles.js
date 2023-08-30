import styled from "styled-components";

import { devices } from "../../style/device";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100vw;
    margin-bottom: 3rem;
    height: 50px;

    @media${devices.tablet}{
        justify-content:  flex-end;
      }
`;

export const Button = styled.a`
    
    padding: 10px 20px;
    text-decoration: none;
    margin-right:20px;
    background-color: #ECE4FD;
    border-radius: 20px;
    border: 3px solid #663AC7;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    color: #7140DB;
    font-weight: bold;
    font-size: 12px;
    
`;

export const Navbar = styled.nav`
    
    
`;