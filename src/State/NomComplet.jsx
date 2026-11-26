import React, { useState } from 'react'

function NomComplet() {
    const [nom,setNom]= useState('')
    const [prenom,setPrenom]= useState('')
    
  return (
    <div>
        Saisir votre nom : <input type="text" onChange={(e)=> setNom(e.target.value)}  /> <br />
        Saisir votre prenom : <input type="text" onChange={(e)=> setPrenom(e.target.value)} />
        {(nom.trim()!=='' && prenom.trim()!=='') && <p>tu t'appelles {nom} {prenom}</p>}

    </div>
  )
}

export default NomComplet