
import { filieres } from "./filieres";

function ChercheFiliere({ filiereChoisie, handleFiliereChange }) {
  return (
    <div className="recherche">
      <label>Choisir une filière : </label>

      <select
        value={filiereChoisie}
        onChange={(e) => handleFiliereChange(e.target.value)}
      >
        <option value="Toutes">Toutes les filières</option>

        {filieres.map((f) => (
          <option key={f.id} value={f.nom}>
            {f.nom}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ChercheFiliere;
