import React from 'react'
import { Link } from 'react-router-dom'


function Users(props) {
    const {users} = props
  return (
    <div>
        <h2>liste des users :</h2>
        <ul>
             {users.map((user,index)=> <li key={user.id}> id: {user.id} - nom : {user.nom} - prénom : {user.prenom} 
                <Link to={`/detail-user/${user.id}`}>détail</Link></li>)}
        </ul>
        <br />
        <Link to='/'>re</Link>
       
    </div>
  )
}

export default Users