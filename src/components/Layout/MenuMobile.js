import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuMobile extends Component {
  state = {
    open: false
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render(){
    return (
      <div className={`menu-mobile${ this.state.open ? ' visible' : '' }`}>

        <div className="menu-mobile__button" onClick={ this.toggleMenuOpen }>
          <div className="menu-button-bar first-bar"></div>
          <div className="menu-button-bar second-bar"></div>
          <div className="menu-button-bar third-bar"></div>
        </div>

        <div className={`menu-mobile__options-wrapper${ this.state.open ? ' visible' : '' }`}>
          <div className="menu-mobile__options">
            <NavLink to="/" activeClassName="menu-active" exact={ true } onClick={ this.toggleMenuOpen }>Shops</NavLink>
            <NavLink to="/add" activeClassName="menu-active" onClick={ this.toggleMenuOpen }>Add Shop</NavLink>
            <NavLink to="/filters" activeClassName="menu-active" onClick={ this.toggleMenuOpen }>Filters</NavLink>
            <NavLink to="/reports" activeClassName="menu-active" onClick={ this.toggleMenuOpen }>Reports</NavLink>
            <NavLink to="/about" activeClassName="menu-active" className="menu__about-link" onClick={ this.toggleMenuOpen }>About</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuMobile
