import React, { Component } from 'react'
import UserProfile from "./UserProfile";
import {users} from "./User.js"

export class App extends Component {
  render() {
    return (
      <div>
        {users.map((user,index)=> 
              <UserProfile
                name={user.name}
                age={user.age}
                email={user.email}
                isStudent={user.isStudent}
              />
         )}
    </div>
    )
  }
}

export default App