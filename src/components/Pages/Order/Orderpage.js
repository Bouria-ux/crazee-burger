import React from 'react'
import { Link, useParams } from "react-router-dom"

export default function Orderpage() {
  //State
    const {username} = useParams()
  //Comportement
  console.log("username:", username)
  //Affichage
  return (
    <div>
      <h1>Bonjour {username}</h1>
        <Link to="/"> <button>Deconexion</button></Link>
      </div>
  )
}
