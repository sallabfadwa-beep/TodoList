import React, { Component } from 'react'
import './BookCard.css'


export default class BookCard extends Component {
  render() {
    const livre = {
                        titre: "Le Petit Prince",
                        auteur: "Antoine de Saint-Exupéry",
                        annee: 1943,
                        prix: 60,
                        genres: ["Conte", "Roman", "Philosophie"]
                    };
    {/*  déstructuration objet */}
    const {titre,auteur,annee,prix,genres}= livre
    const livreSolde = {...livre,prix : 40}
    const tousLesGenres = [...genres, "Jeunesse"];
    
    return (
      <div className='book'>
           <h1>infos livre : </h1>
           <h2>titre : {titre} </h2>
           <p>auteur : {auteur}</p>
           <p>Publié en {annee} par {auteur} </p>
           <p>prix : {prix} DH , prix aprés réduction est  : {prix * 0.8} DH</p>
           <p>{prix > 50 ? 'livre cher': 'livre abordable'}</p>
           <h2>genres du livre sont : </h2>
           <ul>
             {genres.map((genre,index)=> <li key = {genre}>{genre}</li>)}
           </ul>

           <p>{annee < 1950 && <h2>livre classique</h2>}</p>
           <p>nouveau prix du livre soldé : {livreSolde.prix} DH</p>
           <p>{livre.prix > livreSolde.prix && "le prix à diminué "} </p>
           <ol>
              {tousLesGenres.map(genre => <li>{genre}</li>)}
           </ol>

      </div>
    )
  }
}

