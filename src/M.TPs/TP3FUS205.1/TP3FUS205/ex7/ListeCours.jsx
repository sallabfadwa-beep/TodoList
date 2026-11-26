import React from 'react'
import CoursCard from './CoursCard'

function ListeCours(props) {
    const {listeCours} = props
    const nombreCours = listeCours.length
    const nombreetudiants = listeCours.reduce((acc,cours)=>acc + cours.etudiantsInscrits.length,0)

  return (
    <div>
          <h2>liste des cours : </h2>
          {listeCours.map(({code,titre,duree,etudiantsInscrits},index)=> <CoursCard key={index} code = {code} titre={titre} duree= {duree} etudiantsInscrits= {etudiantsInscrits}/>)}
           <div className='statistique'>
               <p> nombre de cours est : {nombreCours}</p>
               <p>nombre total d'étudiants inscrit est : {nombreetudiants}</p>
           </div>
    </div>
  )
}

export default ListeCours