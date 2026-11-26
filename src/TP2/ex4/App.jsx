import React, { Component } from 'react'
import Menu from './Menu'


export default class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'pink'}}>
             <h1>App</h1>
            <Menu/>
      </div>
    )
  }
}
