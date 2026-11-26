import React, { Component } from 'react'
import {projetsInfo} from './data'
import ListeProjets from './ListeProjets'

export default class App extends Component {
  render() {
    const {entreprise,responsable,listeProjets}=projetsInfo
    return (
      <div>
        <p>{entreprise}</p>
        <p>{responsable.nom} | {responsable.email} </p>
        <ListeProjets listeProjets={listeProjets}/>
      </div>
    )
  }
}
