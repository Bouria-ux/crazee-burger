import React, { useState } from 'react'

export default function LoginForm() {
// state
    const [inputValue, setinputValue] = useState("")

    // comportements

    const handleSubmit = (event) => { 
        event.preventDefault()
        alert(`Bonjour ${inputValue}`)
        setinputValue("")
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
