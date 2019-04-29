import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink to="/" activeClassName="menu-active" exact={ true }>Shops</NavLink>
      <NavLink to="/add" activeClassName="menu-active">Add Shop</NavLink>
      <NavLink to="/filters" activeClassName="menu-active">Filters</NavLink>
      <NavLink to="/reports" activeClassName="menu-active">Reports</NavLink>
      <NavLink to="/about" activeClassName="menu-active" className="menu__about-link">About</NavLink>
    </nav>
  )
}

export default Menu
