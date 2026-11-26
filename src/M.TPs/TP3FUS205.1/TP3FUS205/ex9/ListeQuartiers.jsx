import React from 'react'
import QuartierCard from './QuartierCard'
import IndicateursGlobaux from './IndicateursGlobaux'

function ListeQuartiers(props) {
    const {quartiers} = props
    const consommationTotalVille = quartiers.reduce((acc,quartier)=> acc+ quartier.consommation,0)
    const effectifPanneauSolaireVille = quartiers.reduce((acc,quartier)=>acc + quartier.panneauxSolaires,0)
    const budgetVille =  quartiers.reduce((acc,quartier) => {
        const budgetQuartier = quartier.projets.reduce((acc,projet)=>acc + projet.budget,0)
        return acc + budgetQuartier;
    },0)


  return (
    <div>
        <h2>liste des quartiers : </h2>
         {quartiers.map((quartier,index)=>
                  <QuartierCard key={index} {...quartier}/>)}
         <IndicateursGlobaux consommationTotalVille = {consommationTotalVille} 
                             effectifPanneauSolaireVille = {effectifPanneauSolaireVille}
                             budgetVille = {budgetVille}
                             nbQuartiers = {quartiers.length} />
    </div>
  )
}

export default ListeQuartiers