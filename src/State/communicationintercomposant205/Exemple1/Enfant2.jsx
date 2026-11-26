import React from 'react'

function Enfant2(props) {
   const {nom,prenom,afficher,setState2} = props
  return (
    <div style={{backgroundColor:'yellow',padding:'5px'}}> 
        <h2>Enfant 2 : </h2>
        nom : {nom} - prénom : {prenom} 
        <button onClick={()=>afficher('je suis enfant 2')}>afficher enfant 2</button>
        <input type="text"
         placeholder='saisir la valeur de state 2' 
         onChange={(e)=>setState2(e.target.value)}/>
    </div>
  )
}

export default Enfant2