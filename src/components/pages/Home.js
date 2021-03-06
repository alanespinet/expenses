import React, { Component } from 'react'

import Toggle from '../UI/Toggle'
import ShopList from '../ShopList'
import Menu from '../Layout/Menu'
import MenuMobile from '../Layout/MenuMobile'

class Home extends Component {
  render(){
    return (
      <>
        <Menu />
        <MenuMobile />

        <ShopList { ...this.props } />
      </>
    )
  }
}

export default Home
