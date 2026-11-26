import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AjouterArticle({ articles, setArticles }) {
  const navigate = useNavigate();

  const [titre, setTitre] = useState("");
  const [prix, setPrix] = useState("");
  const [categorie, setCategorie] = useState("");
  const [description, setDescription] = useState("");

  function ajouter(e) {
    e.preventDefault();

    const nouvelArticle = {
      id: Date.now(),
      titre,
      prix: Number(prix),
      categorie,
      description
    };

    setArticles([...articles, nouvelArticle]);

    navigate("/liste");
  }

  return (
    <div>
      <h2>Ajouter un article</h2>

      <form onSubmit={ajouter}>
        <label>Titre :</label>
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        />

        <br />

        <label>Prix :</label>
        <input
          type="number"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          required
        />

        <br />

        <label>Catégorie :</label>
        <input
          type="text"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          required
        />

        <br />

        <label>Description :</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AjouterArticle;