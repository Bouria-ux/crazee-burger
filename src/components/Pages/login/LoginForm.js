import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

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
    <div action="submit" onSubmit={handleSubmit}>
        <div >
          <h1  >Bienvenue chez nous !</h1>
          <br/>
          <h2 >Connectez-vous</h2>
        </div >
           <div >
             <input 
             value={inputValue} 
             onChange={handleChange} 
             type="text" 
             placeholder="Entrez votre prenom" 
             required 
             />
             <button>Accéder a mon espace</button>
           </div>

    </div>
  )
}



