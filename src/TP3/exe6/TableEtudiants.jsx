import React from 'react'
import EtudiantRow from './EtudiantRow'

function TableEtudiants({liste }) {
    const moyenneGenerale =liste.reduce((somme, etudiant) => somme + etudiant.moyenne, 0)/ liste.length;
    const nombreReussite = liste.filter((etudiant) => etudiant.moyenne >= 10).length;
    const pourcentageReussite =(nombreReussite / liste.length) * 100;

 return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Nom</th>
            <th>Moyenne</th>
          </tr>
        </thead>

        <tbody>
          {liste.map((etudiant) => (
            <EtudiantRow
              etudiant={etudiant}
              
            />
          ))}
        </tbody>
      </table>

      <div className="statistiques">
        <h3>Statistiques du groupe</h3>

        <p>
          Moyenne générale : {moyenneGenerale.toFixed(2)}
        </p>
        <p>
          Nombre d'étudiants ayant la moyenne (≥ 10) : {nombreReussite}
        </p>

        <p>
          Pourcentage de réussite : {pourcentageReussite.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

export default TableEtudiants