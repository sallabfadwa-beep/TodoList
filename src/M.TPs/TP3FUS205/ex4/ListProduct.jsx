import React from 'react'
import Product from './Product'
function ListProduct(props) {
    const {products} = props
    const style = {display :'flex',flexDirection:'row',justifyContent :'space-around',padding :'10px',backgroundColor:'pink'}
  return (
    <div style ={style}>
        {products.map((product,index)=> <Product key={index} product = {product}/>)}
    </div>
  )
}

export default ListProduct