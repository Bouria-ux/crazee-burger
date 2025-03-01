import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
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
    <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br/>
        <h2>Connectez-vous</h2>
            <input 
            value={inputValue} 
            onChange={handleChange} 
            type="text" 
            placeholder="Entrez votre prenom..." 
            required 
            />
            <button>Accédez a votre espace</button>

    </form>
  )
}
