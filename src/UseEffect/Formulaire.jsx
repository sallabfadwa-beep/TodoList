import React, { useEffect, useState } from 'react'

export default function Formulaire() {
    const [nom,setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    useEffect(() =>{
        document.title = "Tu t'appelle : "+ nom + " " + prenom
    },[nom, prenom])
  return (
    <div>
        nom : <input type ='text' value={nom} onChange={e => setNom (e.target.value)} /> <br />
        prenom : <input type ='text' value={prenom} onChange={e => setPrenom (e.target.value)} /> <br />

    </div>
  )
}
