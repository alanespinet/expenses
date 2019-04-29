import React, { Component } from 'react'
import Menu from '../Layout/Menu'
import MenuMobile from '../Layout/MenuMobile'
import FilterShops from '../FilterShops'

class Filters extends Component {
  render(){
    return (
      <>
        <Menu />
        <MenuMobile />
        <h2>Filter Shops</h2>
        <FilterShops { ...this.props } />
      </>
    )
  }
}

export default Filters
