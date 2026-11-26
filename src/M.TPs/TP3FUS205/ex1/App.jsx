import React from 'react'
import UserCard from './UserCard'

function App() {
    const address2 = {city:'paris',country:'france'}
    const style2 = {backgroundColor:'yellow',padding : '10px'}
  return (
    <div>
        <h1>App</h1>
        <UserCard name="alaoui" age ={20} address = {{city:'marrakech',country:'maroc'}} isStudent = {true} styleCard={{backgroundColor:'red',padding:'10px'}}/>
        <UserCard name="kamili" age = {19} address = {address2} isStudent = {false} styleCard = {style2} />
    </div>
  )
}

export default App