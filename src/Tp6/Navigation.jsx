import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Accueil</Link> {" | "}
      <Link to="/ajouter">Ajouter</Link> {" | "}
      <Link to="/liste">Liste</Link> {" | "}
      {/* -<Link to="/rechercher">Rechercher</Link> */}
    </nav>
  );
}

export default Navigation;