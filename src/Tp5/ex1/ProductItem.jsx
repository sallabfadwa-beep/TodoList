function ProductItem({ produit }) {
  const total = produit.prix * produit.quantite;

  return (
    <tr>
      <td>{produit.nom}</td>
      <td>{produit.categorie}</td>
      <td>{produit.prix} DH</td>
      <td>{produit.quantite}</td>
      <td>{total.toFixed(2)} DH</td>
    </tr>
  );
}

export default ProductItem;
