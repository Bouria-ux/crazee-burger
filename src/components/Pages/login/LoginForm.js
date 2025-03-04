import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import {BsPersonCircle} from "react-icons/bs"

import styled from 'styled-components'
import { theme } from '../../../theme'

export default function LoginForm() {
// state
    const [inputValue, setinputValue] = useState("")
    const navigate = useNavigate()
    // comportements

    const handleSubmit = (event) => { 
        event.preventDefault()
       // alert(`Bonjour ${inputValue}`)
    
        setinputValue("")
        navigate(`Order/${inputValue}`)
     }

 const handleChange = (event) => { 
  setinputValue(event.target.value)
 }


//Affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <div >
          <h1  >Bienvenue chez nous !</h1>
          <hr/>
          <h2 >Connectez-vous</h2>
        </div >
           <div >
             <div className="input-with-icon">
              <BsPersonCircle className="icon"/>
               <input
               value={inputValue}
               onChange={handleChange}
               type="text"
               placeholder="Entrez votre prenom"
               required
               />
               </div>
               <div className="button-container">
                <button>Accéder a mon espace</button>
                </div>
             
           </div>

    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.div`
background: green;
text-align: center;
max-width: 500px;
min-width: 400px;
margin: 0px auto;
padding: 2.5rem 2rem;
border-radius: 5px;
font-family: "Amatic SC", cursive;

hr{
  border: 1.5px solid #f56a2c;
  margin-bottom: 40px;
}

h1{
  color: white;
  color: white;
}

h2{
  color: #8e8b8b;
  margin: 20px 10px 10px;
  color: white;
  font-size: 30px;
}


.input-with-icon{
background-color: #fff;
border-radius: 5px;
display: flex;
align-items: center;
padding: 18px 24px;
margin: 18px 0;
}



input{
  border: none;
  font-size: 15px;
  color: #17161a;

}

.icon{
 font-size: 15px;
 margin-right: 8px;
 color: #93a2b1;
}

.button-container{
 
}

`;

