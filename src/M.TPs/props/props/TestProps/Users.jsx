import React from 'react'

function Users(props) {
  const {effectif,user,users,state,afficher,style,children}= props
  const {id,nom,prenom}= user
  const resultat = state ? 'oui':'non'
  return (
    <div style={style}>
        <p>effectif : {effectif}</p>
        <p>id : {id} , nom : {nom} , prenom : {prenom} </p>
        <p>
            nombre : {users.length}
            <ul>
                {users.map(({id,nom,prenom},index)=> <li key={id}>{id}-{nom} - {prenom}</li>)}
            </ul>
        </p>
        <p>
            {resultat}
        </p>
        <button onClick={afficher}>afficher</button>
        <div>
                {children}
        </div>
        
    </div>
  )
}

export default Users