import React, { Component } from 'react'

export class UserProfile extends Component {
  render() {
     const {name,age,email,isStudent}= this.props;
    return (
      <div>
        <p>{name} </p>
        <p>{age} </p>
        <p>{email} </p>
        <p>{isStudent? 'Étudiant(e)' :'Non étudiant(e)'} </p>
      </div>
    )
  }
}

export default UserProfile