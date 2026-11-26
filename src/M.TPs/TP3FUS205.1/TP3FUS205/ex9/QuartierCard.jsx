import React from 'react'
import ProjetItems from './ProjetItems'
import './QuartierCard.css'

function QuartierCard(props) {
    const {nom, consommation, panneauxSolaires, projets} = props
    const tauxAutonomieEnergetique  = (panneauxSolaires / consommation)*100
    const styleQuartierCard = consommation > 1000 ? "energyHigh" : panneauxSolaires > 100 ? "eco" : "normal"
  return (
    <div className={styleQuartierCard}>
           <p>{nom}</p>
           <p>{consommation}</p>
           <p>{panneauxSolaires}</p>
           <p>{tauxAutonomieEnergetique.toFixed(2)} %</p>
           {
                projets.length === 0 ? 
                <ul><li>aucun projet trouvé </li></ul> : 
                <ProjetItems projets = {projets}/>
            }
    </div>
  )
} 

export default QuartierCard