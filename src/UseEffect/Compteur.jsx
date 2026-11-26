import React, { useEffect, useState } from 'react'

export default function Compteur() {
    const [compteur,setCompteur] = useState(0)
    useEffect(()=> {
        document.title = ' compteur : ' + compteur
        if (compteur == 10){
            document.body.style.backgroundColor = 'pink'
        }
                  //nettoyage
        return () =>{
             document.body.style.backgroundColor = 'white'
         }
    })
  return (
    <div>compteur : {compteur}
    <button onClick= {()=> setCompteur (compteur +2)}> + </button>
    </div>
  )
}
