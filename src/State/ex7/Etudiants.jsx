import Etudiant from "./Etudiant";
import './App.css'
function Etudiants({ etudiants }) {
  return (
    <div className="etudiants">
      <h2>Liste des Étudiants</h2>

      <p>
        Nombre total d'étudiants : {etudiants.length}
      </p>

      <div className="liste">
        {etudiants.map((etudiant) => (
          <Etudiant
            key={etudiant.code}
            code={etudiant.code}
            nom={etudiant.nom}
            prenom={etudiant.prenom}
            note1={etudiant.note1}
            note2={etudiant.note2}
            note3={etudiant.note3}
          />
        ))}
      </div>
    </div>
  );
}

export default Etudiants;


