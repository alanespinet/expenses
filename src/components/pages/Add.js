import React, { Component } from 'react'
import Menu from '../Layout/Menu'
import AddShop from '../AddShop'

class Add extends Component {
  render(){
    return (
      <>
        <Menu />
        <AddShop { ...this.props } />
      </>
    )
  }
}

export default Add
