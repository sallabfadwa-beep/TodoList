import React, { Component } from 'react'
import {users} from './users'
import UserProfil from './UserProfil'

export default class App extends Component {

  render() {
    const styleApp = {padding:'20px',justifyContent:'space-around', margin:'5px',backgroundColor:'pink',display:'flex'}
    return (
      <div>
           <h2>liste des users : </h2>
           <div style = {styleApp}>
              {users.map((user,index)=> <UserProfil user = {user}/>)}
           </div>
      </div>
    )
  }
}
