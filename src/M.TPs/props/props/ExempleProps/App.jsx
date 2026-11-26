import React from 'react'
import Products from './Products'


function App() {
    const products = [
         {id:1,nom:'PC TOSHIBA 4GO RAM ',prix : 3500},
         {id:2,nom: 'PC DELL 8GO RAM',prix : 5000},
         {id:3,nom :'PC HP 16GO RAM',prix : 1000}
    ]
  return (
    <div style={{backgroundColor:'pink',padding : '10px'}}>
          <h1>liste des produits : </h1>
          <Products products = {products}/>
    </div>
  )
}

export default App