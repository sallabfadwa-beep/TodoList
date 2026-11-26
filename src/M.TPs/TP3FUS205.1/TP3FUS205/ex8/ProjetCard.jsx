import React, { Component } from 'react'
import MembreEquipe from './MembreEquipe'

export default class ProjetCard extends Component {
  render() {
     const {projet} = this.props
     const {code,titre,budget,equipe} = projet
    return (
      <div style ={{ border:'1px solid black',backgroundColor :'orange',padding:'10px',width:'250px'}}>
           <p>{code} | {titre}</p>
           <p>{budget.toFixed(2)} DH</p>
           
               {equipe.length  === 0 ? <span style={{color:'red'}} >aucun membre dans l'équipe</span> 
                                       : 
                    <ul>                
                       {equipe.map(({nom,role},index)=> <MembreEquipe nom = {nom} role = {role}/>) }
                    </ul>
                }
           
      </div> 
    )
  }
}
