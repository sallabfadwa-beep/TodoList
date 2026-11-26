import React from 'react'
import {products} from './data'
import ListProduct from './ListProduct'

function App() {
  const styleApp = {backgroundColor:'green',padding:'10px'}
  return (
    <div style={styleApp}>
        <h2>liste des produits </h2>
        <ListProduct products = {products}/>
    </div>
  )
}

export default App