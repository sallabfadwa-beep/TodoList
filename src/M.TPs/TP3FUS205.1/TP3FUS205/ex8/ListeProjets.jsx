import React, { Component } from 'react'
import ProjetCard from './ProjetCard'

export default class ListeProjets extends Component {
  render() {
    const {listeProjets} = this.props
    const budgetTotal  = listeProjets.reduce((acc,projet)=>acc + projet.budget,0)
    const effectifProjets = listeProjets.reduce((acc,projet)=>acc+ projet.equipe.length,0)
    return (
      <div style ={{backgroundColor:'pink',padding :'5px',margin:'5px'}}>
           <h2>liste des projets : </h2>
           <div className='container'>
                  {
                     listeProjets.map((projet,index)=> <ProjetCard  projet = {projet} />)
                  }
           </div>
          
          <div className='statistique'>
                <p>budget total est : {budgetTotal.toFixed(2)} DHs</p>
                <p>effectif total est : {effectifProjets}</p>
          </div>
            
      </div>
    )
  }
}
