import { useState } from "react";
import { produits as produitsInitiaux } from "./data";

import Header from "./Header";
import ChercherBar from "./ChercherBar";
import ResultatList from "./ResultatList";
import FormulaireAjout from "./FormulaireAjout";
import Footer from "./Footer";
import './App.css'

function App() {
  const [categorie, setCategorie] = useState("Toutes les catégories" );
  const [produits, setProduits] = useState(produitsInitiaux);

  function handleCategorieChange(nouvelleCategorie) {
    setCategorie(nouvelleCategorie);
  }

  function handleAddProduit(nouveauProduit) {
    setProduits([...produits, nouveauProduit]);
  }

  const produitsFiltres = categorie === "Toutes les catégories"? produits: produits.filter((p) => p.categorie === categorie);

  return (
    <div>
      <Header />

      <ChercherBar
        categorie={categorie}
        onCategorieChange={handleCategorieChange}
      />

      <FormulaireAjout
        onAddProduit={handleAddProduit}
      />

      <ResultatList produits={produitsFiltres} />

      <Footer produits={produits} />
    </div>
  );
}

export default App;
