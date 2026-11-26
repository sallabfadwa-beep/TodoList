import React from 'react'

function Enfant1(props) {
   const {nom,prenom,afficher,setState1} = props
  return (
    <div style={{backgroundColor:'pink',padding:'5px'}}> 
        <h2>Enfant 1 : </h2>
        nom : {nom} - prénom : {prenom}
        <button onClick={()=>afficher('je suis enfant 1')}>afficher enfant 1</button>
         <input type="text"
         placeholder='saisir la valeur de state 1' 
         onChange={(e)=>setState1(e.target.value)}/>
         
    </div>
  )
}

export default Enfant1