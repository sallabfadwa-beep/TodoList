import React, { Component } from 'react'
import './Menu.css'


export default class Menu extends Component {
  render() {
    const plats = [
                        { id: 1, nom: "Salade", prix: 30 },
                        { id: 2, nom: "Tajine", prix: 80 },
                        { id: 3, nom: "Couscous", prix: 70 },
                        { id: 4, nom: "Glace", prix: 25 }
                  ]
   return (
      <div className="menu">
          <h2>notre menu </h2>
          <ul className='liste'>
            {plats.map((plat,index)=> <li key={plat.id} >{plat.nom} - {plat.prix} DH  {plat.prix > 50 ? "⭐" : null}</li> )}
          </ul>
          <p>nombre de plat est : {plats.length}</p>
      </div>
    )
  }
}
