import React, { useState } from 'react'

export default function LoginPage() {
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
     
    // affichage (render)

  return (
    <div>
        <h1>Bienvenue chez nous</h1>
        <br/>
        <h2>Connectez-vous</h2>
        <form action="submit" onSubmit={handleSubmit}>
            <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prenom..." required />
            <button>Accédez a votre espace</button>

        </form>
    </div>
  )
}
