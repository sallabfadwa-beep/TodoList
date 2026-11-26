
function StagiaireItem({ stagiaire }) {
  // Calculer l'âge
  function calculerAge(dateNaissance) {
    const naissance = new Date(dateNaissance);
    const aujourdHui = new Date();

    let age = aujourdHui.getFullYear() - naissance.getFullYear();

    const mois = aujourdHui.getMonth() - naissance.getMonth();

    if (
      mois < 0 ||
      (mois === 0 && aujourdHui.getDate() < naissance.getDate())
    ) {
      age--;
    }

    return age;
  }

  return (
    <tr>
      <td>{stagiaire.nom}</td>
      <td>{stagiaire.prenom}</td>
      <td>{stagiaire.filiere}</td>
      <td>{stagiaire.telephone}</td>
      <td>{stagiaire.dateNaissance}</td>
      <td>{calculerAge(stagiaire.dateNaissance)} ans</td>
    </tr>
  );
}

export default StagiaireItem;
