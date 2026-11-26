import React from 'react'
import {produits} from './data'
import ProductList from './ProductList'

function App() {
  
  return (
    <div>
        <h2>liste des produits : </h2>
         <ProductList produits = {produits}/>
    </div>
  )
}

export default App