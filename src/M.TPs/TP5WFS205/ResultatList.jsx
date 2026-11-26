import React from 'react'
import ProductItem from './ProductItem'

function ResultatList({ listeProduits}) {
  return (
    <div className='ResultatList'>
      {listeProduits.length ===0 ? <p>products not found </p> :
          <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Catégorie</th>
                  <th>Prix unitaire (DH)</th>
                  <th>Quantité</th>
                  <th>Valeur totale (DH)</th>
                </tr>
              </thead>
              <tbody>
                {listeProduits.map((produit, index)=> 
                <ProductItem key={index} {...produit}/>)
                }
              </tbody>
          </table>
      }
    </div>
  )
}

export default ResultatList