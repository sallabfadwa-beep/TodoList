import React from 'react';
import './ProductCard.css'

function ProductCard() {
  const prix = 150;
  const resultat = prix > 200 ? "premium " : "standard"
  const style1 = {color:'green',backgroundColor:'pink'}
  const message = 'bonjour'.toUpperCase()
  const objet = {a : 1, b : 2}
  const {a,b} = objet

  return (
    <div className='card'>
          <img src="/logo192.png" alt="" />
          <h2 style = {{color:'red',fontSize:'20px',fontStyle:'italic'}}>Produit cosmétique ...</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ducimus quo molestias possimus, dolor totam, incidunt cumque alias ratione rem fugit earum architecto temporibus nesciunt corrupti rerum! Amet, a reprehenderit!</p>
          <p>prix : {prix} DH</p>
          <p>prix TTC : {(prix * 1.2).toFixed(2)} DH</p>
          <p style = {style1}>{resultat}</p>
          {message}
         a =  {a} b = {b}
          <button>Ajouter au panier</button>
    </div>
  )
}

export default ProductCard