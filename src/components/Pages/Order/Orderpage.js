import React from 'react'

import styled from 'styled-components'

import { useParams } from 'react-router-dom'

import { theme } from '../../../theme'
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'

export default function Orderpage() {
  //State
  const {username} = useParams()
  //Comportement
 
  //Affichage
  return (
    <OrderpageStyled>
      <div className="container">
        <Navbar username={username} />
       
        <Main />
        
      </div>
      </OrderpageStyled>
  )
}

const OrderpageStyled = styled.div`
background: ${theme.colors.primary};
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.container{
  background: red;
  height: 95vh;
  width: 1400px;
  display: flex;
  flex-direction: column;
  border-radius: ${theme.borderRadius.extraRound};


 
 


}
`;