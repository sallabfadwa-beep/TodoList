import QuartierCard from "./QuartierCard";
import IndicateursGlobaux from "./IndicateursGlobaux";

function ListeQuartiers({ quartiers }) {
  const consommationTotale = quartiers.reduce(
    (total, quartier) => total + quartier.consommation,
    0
  );

  const totalPanneaux = quartiers.reduce(
    (total, quartier) => total + quartier.panneauxSolaires,
    0
  );

  const budgetTotal = quartiers.reduce(
    (total, quartier) =>
      total +
      quartier.projets.reduce(
        (somme, projet) => somme + projet.budget,
        0
      ),
    0
  );

  return (
    <div>
      <h2>Liste des quartiers</h2>

      <div className="listeQuartiers">
        {quartiers.map((quartier) => (
          <QuartierCard key={quartier.id} {...quartier} />
        ))}
      </div>

      <IndicateursGlobaux
        consommation={consommationTotale}
        panneaux={totalPanneaux}
        budget={budgetTotal}
        nbQuartiers={quartiers.length}
      />
    </div>
  );
}

export default ListeQuartiers;