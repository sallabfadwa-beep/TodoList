function ChercherBar({ categorie, onCategorieChange }) {
  return (
    <div>
      <label>Choisir une catégorie : </label>

      <select value={categorie} onChange={(e) => onCategorieChange(e.target.value)} >
        <option value="Toutes les catégories">
          Toutes les catégories
        </option>
        <option value="Fruit">Fruit</option>
        <option value="Légume">Légume</option>
        <option value="Laitier">Laitier</option>
        <option value="Épicerie">Épicerie</option>
        <option value="Boisson">Boisson</option>
      </select>
    </div>
  );
}

export default ChercherBar;
