function IndicateursGlobaux({
  consommation,
  panneaux,
  budget,
  nbQuartiers
}) {
  const ratio = (panneaux / consommation) * 100;

  const budgetMoyen = budget / nbQuartiers;

  let message = "";

  if (ratio >= 15) {
    message = "🌞 Excellente autonomie énergétique";
  } else if (ratio >= 10) {
    message = "⚖️ Bon équilibre énergétique";
  } else {
    message = "⚠️ Autonomie faible, renforcer les installations !";
  }

  return (
    <div className="indicateurs">
      <h2>Indicateurs globaux</h2>

      <p>Consommation totale : {consommation}</p>

      <p>Total des panneaux solaires : {panneaux}</p>

      <p>
        Budget total des projets : {budget.toLocaleString("fr-FR")} DH
      </p>

      <p>Nombre de quartiers : {nbQuartiers}</p>

      <p>Ratio d'autonomie énergétique : {ratio.toFixed(2)} %</p>

      <p>
        Budget moyen par quartier :{" "}
        {budgetMoyen.toLocaleString("fr-FR")} DH
      </p>

      <h3>{message}</h3>
    </div>
  );
}

export default IndicateursGlobaux;