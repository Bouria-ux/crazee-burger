import React from 'react'

import styled from 'styled-components';
import NavbarRightSide from './NavbarRightSide'
import Logo from "../../reusable-ui/Logo"
import { theme } from '../../../theme';
import { refreshPage } from '../../../utils/windows';
export default function Navbar({username}) {

     //State
       
      //Comportement
      
  return (
    <NavbarStyled >
      <Logo onClick={ () => refreshPage()} />
   
    <NavbarRightSide username={username}/>
   
  </NavbarStyled>
  )
}

const  NavbarStyled= styled.nav`

    background: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;


    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    /* align-items: center;*/
    .logo-order-page{
      cursor: pointer;
    }
  

    
`;
