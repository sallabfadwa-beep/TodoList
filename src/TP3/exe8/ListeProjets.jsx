import ProjetCard from "./ProjetCard";

function ListeProjets({ listeProjets }) {
  const budgetTotal = listeProjets.reduce(
    (total, projet) => total + projet.budget,0);
  const totalMembres = listeProjets.reduce(
    (total, projet) => total + projet.equipe.length,0);
  return (
    <div>
      <h2>Liste des projets</h2>

      {listeProjets.map((projet) => (
        <ProjetCard key={projet.code} {...projet} />
      ))}

      <div className="statistiques">
        <h2>Statistiques globales</h2>
        <p>Nombre total de projets : {listeProjets.length}</p>
        <p>
          Budget total : {budgetTotal.toLocaleString("fr-FR")} DH
        </p>
        <p>Nombre total de membres : {totalMembres}</p>
      </div>
    </div>
  );
}

export default ListeProjets;