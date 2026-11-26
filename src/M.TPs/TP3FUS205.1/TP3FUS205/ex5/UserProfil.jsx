import React, { Component } from 'react'

export default class UserProfil extends Component {
  render() {
    const {name,age,email,isStudent} = this.props.user
     const styleUserProfil = {textAlign:'center',width:'250px',padding:'20px',margin:'5px',backgroundColor:'yellow'}
    return (
      <div style={styleUserProfil}>  
                  <p>{name}</p>
                  <p>{age} ans</p>
                  <p>{email}</p>
                  <p>{isStudent?"Etudiant(e)":"Non Etudiant(e)"}</p>
      </div>
    )
  }
}
