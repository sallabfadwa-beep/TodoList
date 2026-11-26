import React, { Component } from 'react'

export default class User extends Component {
  constructor(props)
  {
    super(props) //obligatoire
    this.id = props.id
    this.nom = props.nom
    this.prenom = props.prenom
  }
  render() {
    const {id,nom,prenom} = this.props
    return (
      <div>
           id : {id}
      </div>
    )
  }
}
