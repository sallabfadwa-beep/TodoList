
import React from "react"
import UserCard from "./UserCard.jsx"

function App() {
    const name ="Hajar"
    const age =22
    const isStudent= true
    const address = {city:"Marrakech", country:"Maroc"}
    const styleCard = {border:'1px solid black', padding:'10px', backgroundColor:'pink'} 

  return (
    <div>
        <UserCard name={name} age={age} isStudent={isStudent} address={address} styleCard={styleCard} />
    </div>
  )
}
export default App;