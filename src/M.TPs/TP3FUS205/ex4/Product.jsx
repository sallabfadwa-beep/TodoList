import React from 'react'

function Product(props) {
    const {product} = props
    const {title,image,description,price} = product
    const styleCard = {textAlign:'center',borderRadius:'5px',backgroundColor:'yellow',padding:'5px',margin:'20px'}
    function afficher()
    {
        alert('produit ajouté au panier')
    }
    return (
    <div style={styleCard}>
         <h3>{title}</h3>
         <p><img src={image} alt="" /></p>
         <p>{description}</p>
         <p>{price} DH</p>
         <p><button onClick={afficher}>ajouter au panier</button></p>
         
    </div>
  )
}

export default Product