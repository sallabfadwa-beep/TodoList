import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  
  return (
    <ul>
      <li><Link to="/" >Accueil</Link></li>
      <li><Link to="/ajouter">Ajouter</Link></li>
      <li><Link to="/liste">Liste</Link></li>
    </ul>
  )
}

export default Navigation