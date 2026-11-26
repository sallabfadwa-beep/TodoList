import React from 'react'

function IndicateursGlobaux(props) {
    const {consommationTotalVille,effectifPanneauSolaireVille,budgetVille,nbQuartiers} =  props
    const ratio =  (effectifPanneauSolaireVille / consommationTotalVille) * 100
    const budgetMoyenParQuartier = (budgetVille / nbQuartiers).toFixed(2)
    const message = ratio >= 15 ? "🌞 Excellente autonomie énergétique" : ratio >=10 ? "⚡ Bon équilibre énergétique" :  "🚨 Autonomie faible, renforcer les installations ! "
    
    return (
    <div style={{backgroundColor:'pink',margin:'10px',padding:'10px'}}> 
          <h2>Indicateurs globaux : </h2>
          <h2>consommation total ville : {consommationTotalVille}</h2>
          <h2>effectif panneaux solaire : {effectifPanneauSolaireVille} </h2>
          <h2>ratio : {ratio.toFixed(2)} %</h2>
          <h2>budget moyen par quartier : {budgetMoyenParQuartier} DH</h2>
          <h2>{message}</h2>
    </div>
  )
}

export default IndicateursGlobaux