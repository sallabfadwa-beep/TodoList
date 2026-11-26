import ProductItem from "./ProductItem";

function ResultatList({ produits }) {
  if (produits.length === 0) {
    return <p>Aucun produit trouvé pour cette catégorie.</p>;
  }
  return (
    <div>
      <h2>Liste des produits</h2>

      <table border="1" className="tab">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Catégorie</th>
            <th>Prix unitaire</th>
            <th>Quantité</th>
            <th>Valeur totale</th>
          </tr>
        </thead>

        <tbody>
          {produits.map((p) => ( <ProductItem key={p.id} produit={p} /> ))}
        </tbody>
      </table>

      <p>Nombre de produits : {produits.length}</p>
    </div>
  );
}

export default ResultatList;
