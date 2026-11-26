function Footer({ produits }) {
  const nombre = produits.length;
  const quantiteTotale = produits.reduce( (somme, p) => somme + p.quantite,0 );
  const valeurStock = produits.reduce((somme, p) => somme + p.prix * p.quantite,0 );
  
  return (
    <footer>
      <h2>Statistiques globales</h2>

      <p>Nombre total de produits : {nombre}</p>

      <p>Quantité totale : {quantiteTotale}</p>

      <p>Valeur totale du stock : {valeurStock.toFixed(2)} DH</p>
    </footer>
  );
}

export default Footer;
