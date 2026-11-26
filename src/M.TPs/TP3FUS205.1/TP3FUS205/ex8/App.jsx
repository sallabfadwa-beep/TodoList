import React, { Component } from 'react'
import {projetsInfo} from './data'
import ListeProjets from './ListeProjets'
import './App.css'

export default class App extends Component {
  render() {
     const {entreprise,responsable:{nom,email},listeProjets} =  projetsInfo

    return (
      <div>
        <p>{entreprise}</p>
        <p>{nom} | {email} </p>
        <ListeProjets listeProjets = {listeProjets} />
      </div>
    )
  }
}
