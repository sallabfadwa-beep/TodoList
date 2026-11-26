import CoursCard from "./CoursCard";

function ListeCours({ listeCours }) {
  const totalCours = listeCours.length;
  const totalEtudiants = listeCours.reduce((total, cours) => total + cours.etudiantsInscrits.length,0);
  return (
    <div>
      <h2>Liste des cours</h2>
      {listeCours.map((cours) => (
        <CoursCard key={cours.code} {...cours} />
      ))}
      <hr />
      <h3>Statistiques</h3>
      <p>Nombre total de cours : {totalCours}</p>
      <p>Nombre total d'inscriptions : {totalEtudiants}</p>
    </div>
  );
}

export default ListeCours;