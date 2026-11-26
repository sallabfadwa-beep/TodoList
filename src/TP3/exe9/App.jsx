import { greenData } from "./data/greenData";
import ListeQuartiers from "./ListeQuartiers";
import "./App.css";

function App() {
  const { ville, responsable, quartiers } = greenData;

  return (
    <div className="container">
      <h1>Ville de {ville}</h1>

      <div className="responsable">
        <h2>Responsable du projet</h2>

        <p>Nom : {responsable.nom}</p>

        <p>Poste : {responsable.poste}</p>

        <p>Email : {responsable.email}</p>
      </div>

      <ListeQuartiers quartiers={quartiers} />
    </div>
  );
}

export default App;