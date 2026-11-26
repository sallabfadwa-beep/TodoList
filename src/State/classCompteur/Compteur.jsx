import React, { Component } from 'react'

export default class Compteur extends Component {
    constructor(props){
        super(props)
        this.state = {count:10,pas:2}
        this.incrementer = this.incrementer.bind(this)
        this.decrementer = this.decrementer.bind(this)
    }

    incrementer(){
        //chnage la variable d'etat nomme count
        this.setState({count:this.state.count + 1})
    }

    decrementer(){
        if(this.state.count > 0)
            this.setState({count:this.state.count - 1})
    }

    reset(){
        this.setState({count:0})
    }
  render() {
    return (
      <div>
        count : {this.state.count} <br />
        pas : {this.state.count} <br />
        <button onClick={this.incrementer}>incrementer</button>
        <button onClick={this.decrementer}>decrementer</button>
        <button onClick={()=>this.reset()}>reset</button>

      </div>
    )
  }
}
