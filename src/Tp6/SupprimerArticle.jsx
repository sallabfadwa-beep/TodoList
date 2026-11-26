import { useParams, useNavigate } from "react-router-dom";

function SupprimerArticle({ articles, setArticles }) {
  const { id } = useParams();
  const navigate = useNavigate();

  function supprimer() {
    const nouvelleListe = articles.filter(
      (a) => a.id !== Number(id)
    );

    setArticles(nouvelleListe);
    navigate("/liste");
  }

  return (
    <div>
      <h2>Supprimer un article</h2>

      <p>Voulez-vous vraiment supprimer l'article numéro {id} ?</p>

      <button onClick={supprimer}>Confirmer la suppression</button>

      <button onClick={() => navigate("/liste")}>
        Annuler
      </button>
    </div>
  );
}

export default SupprimerArticle;