import EtudiantLi from "./EtudiantLi";

function CoursCard({ code, titre, duree, etudiantsInscrits }) {
  const complet = etudiantsInscrits.length > 2;

  return (
    <div className={`carteCours ${complet ? "complet" : "disponible"}`}>
      <h3>{code} - {titre}</h3>
      <p>Durée : {duree} heures</p>
      <p>
        Nombre d'étudiants : {etudiantsInscrits.length}
      </p>
      {etudiantsInscrits.length >0 ? (
        <ul>
          {etudiantsInscrits.map((etudiant, index) => (
            <EtudiantLi
              key={index}
              nom={etudiant.nom}
              email={etudiant.email}
            />))}
        </ul>) : (<p>Aucun étudiant inscrit</p>
      )}
    </div>
  );
}

export default CoursCard;