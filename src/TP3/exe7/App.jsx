import { coursInfo } from "./data";
import ListeCours from "./ListeCours";
import "./App.css";

function App() {
  const { nomCentre, responsable, listeCours } = coursInfo;

  return (
    <div className="container">
      <h1>{nomCentre}</h1>

      <div className="responsable">
        <h2>Responsable</h2>
        <p>Nom : {responsable.nom}</p>
        <p>Email : {responsable.email}</p>
      </div>

      <ListeCours listeCours={listeCours} />
    </div>
  );
}

export default App;