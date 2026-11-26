import React, { useState } from 'react'


function FormulaireAjouter({handleAddProduct}) {
  const [form, setForm] = useState({nom: "",categorie:"",prix:"",quantite:"" })

  function handleChange(e){
    const {name, value, type, checked} = e.target
    setForm({...form, [name]:value})
  }
  function handleSubmit(e){
    e.preventDefault()
    const {nom, categorie, prix, quantite} = form
    if(!nom.trim() || !categorie.trim() || !prix.trim() || !quantite.trim()){
      alert("All inputs must be filled !!")
      return
    }  
    handleAddProduct(form)
    setForm({nom: "",categorie:"",prix:"",quantite:"" })
    alert("produit bien Ajouter !")
    
  }

  return (
    <section className="form-section">
      <h2>Ajouter un produit</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom du produit</label>
        <input id="nom" name="nom" value={form.nom} onChange={handleChange}/>

        <label htmlFor="formCategorie">Catégorie</label>
        <select id="formCategorie" name="categorie"  
                value={form.categorie} onChange={handleChange}>
          <option value="">choisir une categorie</option>
          <option value="Fruit">Fruit</option>
          <option value="Légume">Légume</option>
          <option value="Laitier">Laitier</option>
          <option value="Épicerie">Épicerie</option>
          <option value="Boisson">Boisson</option>
        </select>

        <label htmlFor="prix">Prix unitaire (DH)</label>
        <input
          id="prix"
          name="prix"
          type="number"
          min="0"
          step="0.01"
          value={form.prix}
          onChange={handleChange}
        />

        <label htmlFor="quantite">Quantité</label>
        <input id="quantite" name="quantite" type="number" 
        value={form.quantite} onChange={handleChange} />

        <button type="submit">Ajouter le produit</button>
      </form>
    </section>
  );
}


export default FormulaireAjouter