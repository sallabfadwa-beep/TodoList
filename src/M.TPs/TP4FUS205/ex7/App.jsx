import React from 'react'
import {etudiants} from './data'
import Etudiants from './Etudiants'

function App() {
  return (
    <div>
          <h2>Application de gestion des étudiants </h2>
          <Etudiants etudiants = {etudiants}/>
    </div>
  )
}

export default App