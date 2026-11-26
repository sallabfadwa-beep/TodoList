import React from 'react'
import {coursInfo} from './data'
import ListeCours from './ListeCours'
import './App.css'

function App() {
    const {nomCentre,responsable:{nom,email},listeCours} = coursInfo
  return (
    <div>
        <p>{nomCentre}</p>
        <p>{nom} | {email} </p>
        <ListeCours listeCours = {listeCours}/>
    </div>
  )
}

export default App