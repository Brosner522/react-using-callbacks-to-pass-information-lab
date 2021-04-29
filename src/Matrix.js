import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: '#fff',
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.color}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  changeColor = (hex) => {
    console.log('ran', hex)
    this.setState( {color: hex} )
  }


  render() {
    return (
      <div id="app">
        <ColorSelector changeColor= {this.changeColor}
        
        />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}