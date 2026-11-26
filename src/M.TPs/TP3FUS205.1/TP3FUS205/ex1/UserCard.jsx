import React from 'react'

function UserCard(props) {
  const {name,age,address,isStudent,styleCard} = props
  const {city,country} = address
  return (
    <div style={styleCard}> 
         <p>name : {name} </p>
         <p>age : {age} </p>
         <p>address : city : {city} , country  : {country} </p>
         <p>{isStudent ? "Etudiant(e)":"Non Etudiant(e)"}</p>

    </div>
  )
}

export default UserCard