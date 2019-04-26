import React, { Component } from 'react'
import Menu from '../Layout/Menu'
import MenuMobile from '../Layout/MenuMobile'
import AddShop from '../AddShop'

class Add extends Component {
  render(){
    return (
      <>
        <Menu />
        <MenuMobile />
        <AddShop { ...this.props } />
      </>
    )
  }
}

export default Add
