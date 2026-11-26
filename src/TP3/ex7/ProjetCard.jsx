import React,{ Component } from "react";
import MembreEquipe from "./MembreEquipe";

export default class ProjetCard extends Component{
    render(){
        const  {listeProjet}= this.props
        const {code, titre, budget, equipe}= listeProjet
        return(
            <div className={ budget >= 15000 ? 'grandBudget' : 'petitBudget'}>
                <p>{code} </p>
                <p>{titre} </p>
                <p>{budget} </p>
            

            {equipe.length === 0 ?
            
            <ul>
               {equipe.map((eq,index)=><MembreEquipe key={index} nom={eq.nom} role={eq.role}  />
            )}
           </ul> 
                          :
             "Aucun membre dans l’équipe"
            }
            </div>
      )}
   
}