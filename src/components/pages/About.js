import React, { Component } from 'react'
import Menu from '../Layout/Menu'
import MenuMobile from '../Layout/MenuMobile'

class About extends Component {
  render(){
    return (
      <>
        <Menu />
        <MenuMobile />
        <h2>About</h2>
      </>
    )
  }
}

export default About
