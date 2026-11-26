import React from 'react'

function ListeProduit(props) {
    const {panier} = props
  return (
    <ul style={{backgroundColor:'pink'}}> 
         {panier.map((produit,index)=> 
             <li key={index}>nom :{produit.nom} , prix : {produit.prix} DH , catégorie : {produit.categorie} ,quantité : {produit.quantite}</li>)}
    </ul>
  )
}

export default ListeProduit