import { useParams, Link } from "react-router-dom";

function DetailArticle({ articles }) {
  const { id } = useParams();

  const article = articles.find(
    (a) => a.id === Number(id)
  );

  if (!article) {
    return <h2>Article introuvable !</h2>;
  }

  return (
    <div>
      <h2>🔍 Détail de l'article</h2>

      <p>ID : {article.id}</p>
      <p>Nom : {article.titre}</p>
      <p>Prix : {article.prix} DH</p>
      <p>Catégorie : {article.categorie}</p>
      <p>Description : {article.description}</p>

      <Link to="/liste">Retour à la liste</Link>
    </div>
  );
}

export default DetailArticle;