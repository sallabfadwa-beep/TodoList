import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ModifierArticle({ articles, setArticles }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articles.find(
    (a) => a.id === Number(id)
  );

  const [titre, setTitre] = useState(article?.titre || "");
  const [prix, setPrix] = useState(article?.prix || "");
  const [categorie, setCategorie] = useState(article?.categorie || "");
  const [description, setDescription] = useState(
    article?.description || ""
  );

  if (!article) {
    return <h2>Article introuvable !</h2>;
  }

  function modifier(e) {
    e.preventDefault();

    const nouvelleListe = articles.map((a) =>
      a.id === Number(id)
        ? {
            ...a,
            titre,
            prix: Number(prix),
            categorie,
            description
          }
        : a
    );

    setArticles(nouvelleListe);
    navigate("/liste");
  }

  return (
    <div>
      <h2>Modifier un article</h2>

      <form onSubmit={modifier}>
        <label>Titre :</label>
        <input
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

        <button type="submit">Enregistrer les modifications</button>
      </form>
    </div>
  );
}

export default ModifierArticle;