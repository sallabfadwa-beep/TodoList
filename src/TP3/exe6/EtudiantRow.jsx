import React from 'react'

function EtudiantRow(props) {
  const {etudiant}= props
  return (
    <tr className={etudiant.moyenne >= 15 ? "excellent" : "normal"}>
      <td>{etudiant.code}</td>
      <td>{etudiant.nom}</td>
      <td>{etudiant.moyenne}</td>
    </tr>
  )
}

export default EtudiantRow