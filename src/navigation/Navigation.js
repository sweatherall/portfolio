import React  from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/">visual</NavLink>
      <NavLink to="/textual">textual</NavLink>
      <NavLink to="/personal">personal</NavLink>

      <NavLink to="/auth">log in</NavLink>
    </nav>
  )
}

export default Navigation
