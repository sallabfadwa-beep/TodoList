function Product(props){
    const {product}= props
    const {title,image,description,price} = product

    function afficher(){
        alert('produit ajouté au panier')
    }
    return(
        <div style={{backgroundColor:'#90EE90', border:'1px solid black', padding:'10px' , margin:'10px'}}>
            <p><img src={image} alt="" height={'200px'} /></p>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price} </p>
            <p><button onClick={afficher}>Ajouter au panier</button></p>

        </div>
    )
}
export default Product;