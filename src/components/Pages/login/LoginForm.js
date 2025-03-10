import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"


import styled from 'styled-components'

import TextInput from '../../reusable-ui/TextInput'
import { BsPersonCircle } from 'react-icons/bs'


import { IoChevronForward } from 'react-icons/io5'
import PrimaryButton from '../../reusable-ui/PrimaryButton'
import { theme } from '../../../theme'


export default function LoginForm() {
// state
    const [inputValue, setInputValue] = useState("")
   
    const navigate = useNavigate()
    // comportements

    const handleSubmit = (event) => { 
        event.preventDefault()
       // alert(`Bonjour ${inputValue}`)
    
        setInputValue("")
        navigate(`Order/${inputValue}`)
     }

 const handleChange = (event) => { 
  setInputValue(event.target.value)
 }

 


//Affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <div >
          <h1  >Bienvenue chez nous !</h1>
          <hr/>
          <h2 >Connectez-vous</h2>
        </div >
      
       
           <TextInput 
           value={inputValue}
           onChange={handleChange} 
           placeholder={"Entrez votre prenom"} 
           required  
           Icon={<BsPersonCircle className="icon" />} 
           />
   
             <PrimaryButton  label={"Acceder a mon espace"} Icon={<IoChevronForward className="Icon" />}
               />
             
             
          

    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`

text-align: center;
max-width: 500px;
min-width: 400px;
margin: 0px auto;
padding: 40px ${theme.spacing.lg};
border-radius: ${theme.borderRadius.round};
font-family: "Amatic SC", cursive;

hr{
  border: 1.5px solid ${theme.colors.loginLine};
  margin-bottom: ${theme.gridUnit *5}px;
}

h1{
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.P5};
}

h2{
  
  margin: 20px 10px 10px;
  color: ${theme.colors.white};
  font-size:${theme.fonts.size.P4};
}

.icon{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fonts.size.P0};
  margin-left: 10px;
}





`;

