import React from "react";

function UserCard(props) {
    const {name,age,isStudent,address,styleCard}=props
    const result = isStudent? "Etudiant": "non Etudiant";
   // const {city,country} = address;

  return (
    <div style={styleCard}>
        <p>{name}</p>
        <p>{age}</p>
        <p>{result}</p>
        <p>city: {address.city} {address.country}</p>
    </div>
  )
}
export default UserCard;