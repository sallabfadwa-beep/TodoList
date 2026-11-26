import React, { Component } from 'react'
import ProjetCard from './ProjetCard'

export default class ListeProjets extends Component {
  render() {
    const {listeProjets}= this.props
    const budgetTotal= listeProjets.reduce((acc,projet)=>acc+projet.budget,0)
    const membreTotale= listeProjets.reduce((acc,projet)=>acc+projet.equipe.length,0)
    return (
      <div>
        {listeProjets.map((listeProjet,index)=><ProjetCard key={index} listeProjet={listeProjet}/>)}

        <p>{budgetTotal}</p>
        <p>{membreTotale} </p>
      </div>
      
    
    )
  }
}
