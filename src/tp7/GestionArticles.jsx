import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GestionArticles() {
  const [articles, setArticles] = useState([]);
  const [titre, setTitre] = useState("");
  const [contenu, setContenu] = useState("");

  // GET : afficher les articles
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.log(error));
  }, []);

  // POST : ajouter un article
  const ajouterArticle = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: titre,
        body: contenu,
        userId: 1
      })
    })
      .then(response => response.json())
      .then(data => {
        setArticles([data, ...articles]);
        setTitre("");
        setContenu("");
      })
      .catch(error => console.log(error));
  };

  // PUT : modifier un article
  const modifierArticle = (article) => {
    const nouveauTitre = prompt("Nouveau titre :", article.title);

    if (!nouveauTitre) return;

    fetch(`https://jsonplaceholder.typicode.com/posts/${article.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...article,
        title: nouveauTitre
      })
    })
      .then(response => response.json())
      .then(data => {
        setArticles(
          articles.map(a =>
            a.id === article.id ? { ...a, title: data.title } : a
          )
        );
      })
      .catch(error => console.log(error));
  };

  // DELETE : supprimer un article
  const supprimerArticle = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setArticles(articles.filter(a => a.id !== id));
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="container">
      <h1>Gestion des Articles</h1>

      <form onSubmit={ajouterArticle}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={e => setTitre(e.target.value)}
          required
        />

        <textarea
          placeholder="Contenu"
          value={contenu}
          onChange={e => setContenu(e.target.value)}
          required
        />

        <button type="submit">Ajouter</button>
      </form>

      <h2>Liste des articles</h2>

      {articles.map(article => (
        <div className="item" key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>

          <Link to={`/articles/${article.id}`}>
            <button>Détails</button>
          </Link>

          <button onClick={() => modifierArticle(article)}>
            Modifier
          </button>

          <button onClick={() => supprimerArticle(article.id)}>
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}

export default GestionArticles;