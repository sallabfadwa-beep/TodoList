import ProjetItem from "./ProjetItem";

function QuartierCard({
  nom,
  consommation,
  panneauxSolaires,
  projets
}) {
  const autonomie = (panneauxSolaires / consommation) * 100;

  let classe = "normal"
  if (panneauxSolaires > 100) {
    classe = "eco";
  }
  if (consommation > 1000) {
    classe = "energyHigh";
  }

  return (
    <div className={`carteQuartier ${classe}`}>
      <h3>{nom}</h3>

      <p>Consommation : {consommation}</p>

      <p>Nombre de panneaux solaires : {panneauxSolaires}</p>

      <p>Autonomie énergétique : {autonomie.toFixed(2)} %</p>

      <h4>Projets écologiques</h4>

      {projets.length > 0 ? (
        <ul>
          {projets.map((projet, index) => (
            <ProjetItem key={index} {...projet} />
          ))}
        </ul>
      ) : (
        <p className="vide">Aucun projet enregistré.</p>
      )}
    </div>
  );
}

export default QuartierCard;