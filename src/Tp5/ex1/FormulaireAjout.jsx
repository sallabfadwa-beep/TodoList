import { useState } from "react";

function FormulaireAjout({ onAddProduit }) {
  const [nom, setNom] = useState("");
  const [categorie, setCategorie] = useState("Fruit");
  const [prix, setPrix] = useState("");
  const [quantite, setQuantite] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nom || prix === "" || quantite === "") {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    if (Number(prix) <= 0 || Number(quantite) < 0) {
      alert("Prix ou quantité invalide !");
      return;
    }

    const nouveauProduit = {
      id: Date.now(),
      nom,
      categorie,
      prix: Number(prix),
      quantite: Number(quantite)
    };

    onAddProduit(nouveauProduit);

    setNom("");
    setCategorie("Fruit");
    setPrix("");
    setQuantite("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un produit</h2>

      <input type="text" placeholder="Nom du produit" value={nom} onChange={(e) => setNom(e.target.value)} />

      <select value={categorie} onChange={(e) => setCategorie(e.target.value)}  >
        <option>Fruit</option>
        <option>Légume</option>
        <option>Laitier</option>
        <option>Épicerie</option>
        <option>Boisson</option>
      </select>

      <input type="number"  placeholder="Prix"  value={prix}  onChange={(e) => setPrix(e.target.value)} />

      <input  type="number"  placeholder="Quantité"  value={quantite}  onChange={(e) => setQuantite(e.target.value)} />

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default FormulaireAjout;
