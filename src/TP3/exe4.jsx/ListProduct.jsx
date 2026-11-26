import React from 'react'
import Product from './Product'

function ListProduct(props) {
    const {products} = props;
    const stytle = {display:'flex', margin:'5px',flexDirection:'row',justifyContent :'space-around' , backgroundColor:'#E8DCC8' , textAlign:'center'}
  return (
    <div style={stytle}>
         {products.map((product,index)=>  <Product product={product}/>)}  
    </div>
  )
}

export default ListProduct