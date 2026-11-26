import React, { useEffect,useState } from 'react'

function Formulaire() {
  const [nom,setNom] = useState('')
  const [prenom,setPrenom]=useState('')
  useEffect(()=>{
          document.title = "tu t'appelles :" + nom + " " + prenom
  },[nom,prenom])
  
  return (
    <div>
          nom : <input type="text" value={nom}
               onChange={(e)=>setNom(e.target.value)} /> <br />
          prénom : <input type="text" value={prenom} 
               onChange={(e)=>setPrenom(e.target.value)} />
    </div>
  )
}

export default Formulaire