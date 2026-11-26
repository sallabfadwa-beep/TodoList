import React from 'react'

function Product(props) {
  const {product} = props
  const {id,nom,prix} = product

  return (
    <li style ={{backgroundColor:'yellow',margin:'5px'}}>{id} - {nom} {prix} DH</li>
  )
}

export default Product