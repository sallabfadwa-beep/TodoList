import { useState } from "react";

function Etudiant({code,nom,prenom,note1,note2,note3}) {
  const [moyenne, setMoyenne] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);


  const calculerMoyenne = () => {
    const resultat = (note1 + note2 + note3) / 3;

    setMoyenne(resultat.toFixed(2));
    setIsButtonDisabled(true);
  };

  return (
    <div className="etudiant">
      <h3>
        {nom} {prenom}
      </h3>

      <p>Code : {code}</p>
      <p>Nom : {nom}</p>
      <p>Prénom : {prenom}</p>

      <p>Note 1 : {note1}</p>
      <p>Note 2 : {note2}</p>
      <p>Note 3 : {note3}</p>

      <button
        onClick={calculerMoyenne}
        disabled={isButtonDisabled}
      >
        {isButtonDisabled
          ? "Moyenne Calculée"
          : "Calculer la moyenne"}
      </button>

      <p>
        {moyenne === null
          ? "Cliquez pour calculer la moyenne"
          : `Moyenne : ${moyenne}`}
      </p>
    </div>
  );
}

export default Etudiant;




