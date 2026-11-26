import React from 'react'
import Etudiant from './Etudiant'

function Etudiants(props) {
    const {etudiants} = props
  return (
    <div>
      <h2>liste des étudiants : </h2>
      <p>nombre d'étudiant est : {etudiants.length}</p>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        {etudiants.map((etd,index)=> <Etudiant key={index} {...etd} />)}
      </div>
    </div>
  )
}

export default Etudiants