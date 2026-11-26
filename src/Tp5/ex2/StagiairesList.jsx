
import StagiaireItem from "./StagiaireItem";

function StagiairesList({ stagiaires }) {
  if (stagiaires.length === 0) {
    return (
      <p className="message">
        Aucun stagiaire trouvé pour cette filière.
      </p>
    );
  }

  return (
    <div>
      <h2>Liste des stagiaires</h2>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Filière</th>
            <th>Téléphone</th>
            <th>Date de naissance</th>
            <th>Âge</th>
          </tr>
        </thead>

        <tbody>
          {stagiaires.map((s) => (
            <StagiaireItem key={s.id} stagiaire={s} />
          ))}
        </tbody>
      </table>

      <p>
        Nombre total de stagiaires affichés : {stagiaires.length}
      </p>
    </div>
  );
}

export default StagiairesList;
