import React from 'react'

function ProductItem(props) {
  const {nom, categorie, prix, quantite} = props
  return (
    <tr>
      <td>{nom}</td>
      <td>{categorie}</td>
      <td>{prix}</td>
      <td>{quantite}</td>
      <td>{prix * quantite} </td>
    </tr>
  )
}

export default ProductItem