import React from 'react'
import Users from './Users'


function App() {
  const effectif = 20
  const user1 = {id:1,nom:"ali",prenom:"kamal"}
  const user2 = {id:2,nom:"kamili",prenom:"jamal"}
  const user3 = {id:3,nom:"drai",prenom:"badr"}
  const state = true
  const users = [user1, user2]
  const mesUsers = [...users,user3]
  const style1 = {backgroundColor:"red",margin:'20px',padding:'10px'}
  const style2 ={backgroundColor:'pink',border : "1px solid black",margin:'20px'}
  function x()
  {
     alert("bonjour");
  }
  return (
    <div>
        <Users style = {style1} effectif = {effectif} user = {user1} state = {state} users = {users} afficher = {x}>
            <h1>users stagiaire</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia exercitationem ipsa. Rerum quaerat cum ipsum labore accusamus ea recusandae voluptatibus quasi distinctio libero cupiditate quia, numquam in provident repellat!</p>
        </Users>
        <Users style={style2} effectif = {5} user = {user3} state = {false} users = {mesUsers} afficher = {x}>
            <p>bonjour tout le monde </p>
        </Users>
        <button onClick={x}>afficher</button>
    </div>
  )
}

export default App