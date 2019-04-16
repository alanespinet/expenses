import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink to="/" activeClassName="menu-active" exact={ true }>Shops</NavLink>
      <NavLink to="/add" activeClassName="menu-active">Add Shop</NavLink>
      <NavLink to="/about" activeClassName="menu-active">About</NavLink>
    </nav>
  )
}

export default Menu
