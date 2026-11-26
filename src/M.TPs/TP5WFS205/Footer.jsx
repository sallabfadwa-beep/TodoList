import React from 'react'

function Footer({listeProduits}) {
  let effectifProduit = listeProduits.length
  let effectifStock = listeProduits.reduce((acc, produit)=>
                      acc+produit.quantite, 0)

  let valeurTotalStock = listeProduits.reduce((acc, produit)=>
                          acc+produit.quantite * produit.prix, 0)
  return (
    <div className='footer'>
      <h2>statistique :</h2>
      <p>effectif produit :{effectifProduit} </p>
      <p>effectif stock : {effectifStock}</p>
      <p>la valeur total de stock : {valeurTotalStock} DH</p>
    </div>
  )
}

export default Footer