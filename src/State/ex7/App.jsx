import Etudiants from "./Etudiants";
import data from "./data";


function App() {
  return (
    <div className="app">
      <h1>Application de Gestion des Étudiants</h1>

      <Etudiants etudiants={data} />
    </div>
  );
}

export default App;