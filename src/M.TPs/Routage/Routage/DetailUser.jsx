import React from 'react'
import { Link, useParams } from 'react-router-dom'

function DetailUser(props) {
    const {users} = props
    const {id} = useParams()
    const monUser = users.find((user,index)=>user.id == id)
  return (
    <div> Détail user id : {id}  <br />
       <p>nom : {monUser.nom}</p>
       <p>prénom : {monUser.prenom}</p>
       
       <Link to='/Users'>retour</Link>
        
 </div>
  )
}

export default DetailUser