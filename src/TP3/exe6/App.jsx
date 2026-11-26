import React from 'react'
import {groupeInfo } from './data'
import TableEtudiants from './TableEtudiants'

function App() {
      const { nomGroupe, filiere, responsable, listeEtudiants } = groupeInfo;
  return (
    <div className="app-container">
      <h1>{nomGroupe}</h1>
      <h2>Filière : {filiere}</h2>

        <div className="responsable">
            <h3>Informations du responsable</h3>
            <p>Nom : {responsable.nom}</p>
            <p>Module : {responsable.module}</p>
            <p>Email : {responsable.email}</p>
        </div>

      <TableEtudiants liste={listeEtudiants} />
    </div>
  )
}

export default App
