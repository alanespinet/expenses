import React, { Component } from 'react'
import Menu from '../Layout/Menu'
import MenuMobile from '../Layout/MenuMobile'

class Login extends Component {
  render(){
    return (
      <>
        <Menu />
        <MenuMobile />

        <h2>Login</h2>
      </>
    )
  }
}

export default Login
