import React from 'react'
import EtudiantLi from './EtudiantLi'

function CoursCard(props) {
    const {code,titre,duree,etudiantsInscrits} = props
  return (
    <div className={etudiantsInscrits.length >=2 ? 'complet':'disponible'}>
        <p>code cours :{code}</p>
        <p>titre cours : {titre}</p>
        <p>durée cours {duree} Heure(s)</p>
        <h2>liste des inscrits : </h2>
        {etudiantsInscrits.length === 0 ? "aucun étudiant inscrit" : 
          <ul>
             {etudiantsInscrits.map((etd,index)=> <EtudiantLi key={index} nom = {etd.nom} email= {etd.email}/>)}
          </ul>
        }

    </div>
  )
}

export default CoursCard