import React, { Component } from 'react'

export default class MembreEquipe extends Component {
  render() {
     const {nom,role} = this.props
    return (
      <li>
           {nom} | {role}
      </li>
    )
  }
}
