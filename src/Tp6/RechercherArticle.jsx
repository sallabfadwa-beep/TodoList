import { useState } from "react";
import { Link } from "react-router-dom";

function RechercherArticle({ articles }) {
  const [motCle, setMotCle] = useState("");

  const resultats = articles.filter((a) =>
    a.categorie.toLowerCase().includes(motCle.toLowerCase())
  );

  return (
    <div>
      <h2>Rechercher un article par catégorie</h2>

      <input
        type="text"
        placeholder="Saisir une catégorie..."
        value={motCle}
        onChange={(e) => setMotCle(e.target.value)}
      />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Prix</th>
            <th>Catégorie</th>
            <th>Détails</th>
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
                <Link to={`/detail/${a.id}`}>Voir</Link>
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

export default RechercherArticle;