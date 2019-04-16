import React, { Component } from 'react'

import Toggle from '../UI/Toggle'
import ShopList from '../ShopList'
import Menu from '../Layout/Menu'

class Home extends Component {
  render(){
    return (
      <>
        <Menu />
        <ShopList />
      </>
    )
  }
}

export default Home
