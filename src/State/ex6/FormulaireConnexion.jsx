import { useState } from "react";
import users from "./users";

function FormulaireConnexion() {
  const [nom, setNom] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [souvenir, setSouvenir] = useState(false);

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier les champs
    if (nom === "" || motDePasse === "") {
      setMessage("Erreur : veuillez remplir tous les champs !");
      setSuccess(false);
      return;
    }

    // Vérifier la longueur du mot de passe
    if (motDePasse.length < 6) {
      setMessage("Erreur : le mot de passe doit contenir au moins 6 caractères !");
      setSuccess(false);
      return;
    }

    // Chercher l'utilisateur
    const utilisateur = users.find(
      (user) =>
        user.nom === nom && user.motDePasse === motDePasse
    );

    // Vérifier la connexion
    if (utilisateur) {
      setMessage(`Bienvenue, ${nom} !`);
      setSuccess(true);

      if (souvenir) {
        setMessage(
          `Bienvenue, ${nom} ! Vous serez connecté automatiquement la prochaine fois.`
        );
      }

      // Réinitialiser les champs
      setNom("");
      setMotDePasse("");    
      setSouvenir(false);
    } else {
      setMessage(
        "Erreur : Nom d’utilisateur ou mot de passe incorrect !"
      );
      setSuccess(false);
    }
  };

  return (
    <div>
      <h2>Formulaire de connexion</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={souvenir}
            onChange={(e) => setSouvenir(e.target.checked)}
          />
          Se souvenir de moi
        </label>

        <button type="submit">Connexion</button>
      </form>

      {message && (
        <p style={{ color: success ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default FormulaireConnexion;