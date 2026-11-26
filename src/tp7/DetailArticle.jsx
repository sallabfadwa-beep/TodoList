import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function DetailArticles() {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  // GET : récupérer un article par ID
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        setArticle(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Chargement...</h2>;
  }

  if (!article) {
    return <h2>Article introuvable</h2>;
  }

  return (
    <div className="container">
      <h1>Détail de l'article</h1>

      <h2>{article.title}</h2>

      <p>{article.body}</p>

      <p>ID : {article.id}</p>

      <Link to="/articles">
        <button>Retour</button>
      </Link>
    </div>
  );
}

export default DetailArticles;