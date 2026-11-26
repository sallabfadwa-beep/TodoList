
import { useState } from "react";
import { Link } from "react-router-dom";

function ListeArticles({ articles }) {
  const [motCle, setMotCle] = useState("");

  const resultats = articles.filter((a) =>
    a.titre.toLowerCase().includes(motCle.toLowerCase()) ||
    a.categorie.toLowerCase().includes(motCle.toLowerCase())
  );

  return (
    <div>
      <h2>Liste des articles</h2>

      <div className="recherche">
        <input
          type="text"
          placeholder="🔍 Rechercher un article..."
          value={motCle}
          onChange={(e) => setMotCle(e.target.value)}
        />
      </div>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Prix</th>
            <th>Catégorie</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {resultats.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.titre}</td>
              <td>{a.prix} DH</td>
              <td>{a.categorie}</td>
              <td>
                <Link to={`/detail/${a.id}`}>Détails</Link>
                {" | "}
                <Link to={`/modifier/${a.id}`}>Modifier</Link>
                {" | "}
                <Link to={`/supprimer/${a.id}`}>Supprimer</Link>
              </td>
            </tr>
          ))}

          {resultats.length === 0 && (
            <tr>
              <td colSpan="5">Aucun article trouvé.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListeArticles;
