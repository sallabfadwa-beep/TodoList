import React from 'react'
import './ProductList.css'

function ProductList(props) {
    const {produits} = props
  return (
    <table>
          <thead>
            <tr>
                <th>ID</th><th>NOM</th><th>PRIX(DH)</th><th>DISPONIBLE</th><th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {produits.map((produit,index)=> <tr>
                <td>{produit.id}</td>
                <td>{produit.name}</td>
                <td>{produit.price}</td>
                <td>{produit.disponible ? "oui" : "non"}</td>
                <td>{produit.description}</td>
            </tr>)}
          </tbody>

    </table>
  )
}

export default ProductList