import MembreEquipe from "./MembreEquipe";

function ProjetCard({ code, titre, budget, equipe }) {
  const classe = budget >= 15000 ? "grandBudget" : "petitBudget";

  return (
    <div className={`carteProjet ${classe}`}>
      <h3>{code} - {titre}</h3>
      <p>Budget : {budget.toLocaleString("fr-FR")} DH</p>
      <h4>Équipe du projet</h4>
      {equipe.length > 0 ?(<ul>{equipe.map((membre, index)=>(<MembreEquipe
              key={index}
              nom={membre.nom}
              role={membre.role}
            />
          ))}
        </ul>) : (<p>Aucun membre dans l'équipe</p>)
      }
    </div>
  );
}

export default ProjetCard;