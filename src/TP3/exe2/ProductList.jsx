import React from 'react'
import './ProductList.css'

function ProductList(props) {
    const {produits}= props
  return (
      <table >  
        <thead>  
          <tr>
            <th>ID</th>
            <th>Nom </th>
            <th>Prix</th>
            <th> Disponible</th>
            <th>Description</th>            
          </tr>
        </thead>  
          <tbody>
          {produits.map((produit,index)=><tr key={produit.id}>
            <td>{produit.id}  </td>
              <td>{produit.name} </td>
               <td>{produit.price}</td>
                <td>{produit.disponible? "OUI" : "NON"}</td>  
                 <td>{produit.description}</td>
          </tr>
         )}
         </tbody>

      </table>
  )
}

export default ProductList