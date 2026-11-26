import { projetsInfo } from "./data";
import ListeProjets from "./ListeProjets";
import "./App.css";

function App() {
  const { entreprise, responsable, listeProjets } = projetsInfo;

  return (
    <div className="container">
      <h1>{entreprise}</h1>

      <div className="responsable">
        <h2>Responsable</h2>
        <p>Nom : {responsable.nom}</p>
        <p>Email : {responsable.email}</p>
      </div>

      <ListeProjets listeProjets={listeProjets} />
    </div>
  );
}

export default App;