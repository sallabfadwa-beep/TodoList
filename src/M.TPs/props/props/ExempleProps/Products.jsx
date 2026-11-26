import React from 'react'
import Product from './Product'


function Products(props) {
  const {products} = props

  return (
    <div style = {{backgroundColor:'red',padding:'5px'}}>
         <h2>nombre de produit est  : {products.length}</h2>
         <ul style ={{listStyleType:'none',padding: '5px'}}>
            {products.map((product,index)=> <Product product = {product}/>)}
         </ul>
    </div>
  )
}

export default Products