import React, { useState } from 'react'
import { produits } from './data'
import ChercherBar from './ChercherBar'
import ResultatList from './ResultatList'
import Header from './Header'
import FormulaireAjouter from './FormulaireAjouter'
import Footer from './Footer'
import './App.css'

function App() {
    const [categorie, setCategorie] = useState("")
    const [listeProduits, setListeProduits] = useState(produits)

    
    function handleCategorieChange(p_categorieChoisie){
        setCategorie(p_categorieChoisie)    
    }
    function handleAddProduct(nouveauProduit){
        setListeProduits([...listeProduits, nouveauProduit])
    }
    let filteredProduits = (categorie === "") ? listeProduits : 
            listeProduits.filter((p)=> p.categorie === categorie)

    // const FilteredProducts = listeProduits.filter((p)=> p.categorie === "categorie")

  return (
    <div>
        <Header/>
        <ChercherBar handleCategorieChange={handleCategorieChange} />
        <ResultatList listeProduits={filteredProduits}  />
        <FormulaireAjouter handleAddProduct={handleAddProduct}/>
        <Footer listeProduits={listeProduits}/>
    </div>
  )
}

export default App