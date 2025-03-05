import React from 'react'
import { Link, useParams } from "react-router-dom"
import styled from 'styled-components'

export default function Orderpage() {
  //State
    const {username} = useParams()
  //Comportement
  console.log("username:", username)
  //Affichage
  return (
    <OrderpageStyled>
      <div className="container">
        <h1>Bonjour {username}</h1>
          <Link to="/">
          <button>Deconexion</button></Link>
      </div>
      </OrderpageStyled>
  )
}

const OrderpageStyled = styled.div`
background: orange;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.container{
  background: red;
  height: 95vh;
  width: 1400px;
}
`;