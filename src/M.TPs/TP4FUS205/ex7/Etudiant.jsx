import React, { useState } from 'react'

function Etudiant(props) {
    const {code, nom, prenom, note1, note2, note3} =props
    const [moyenne,setMoyenne] = useState(null)
    const [isButtonDisabled,setIsButtonDisabled]= useState(false)
    function CalculerMoyenne()
    {
        let m = ((note1 + note2 + note3)/3).toFixed(2)
        setMoyenne(m)
        setIsButtonDisabled(true)
    }
    return (
    <div>
          <p> Etudiant : {nom} {prenom} </p>
          <p>code : {code}</p>
          <p>notes : {note1} , {note2} , {note3}</p>
          <p>Moyenne : {moyenne === null ? "cliquer pour calculer la moyenne " : moyenne}</p>
          <p>
            <button onClick={CalculerMoyenne} disabled = {isButtonDisabled}>calculer la moyenne !!!</button>
          </p>
    </div>
  )
}

export default Etudiant