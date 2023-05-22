import React from 'react'
import { NavContainer, NavContainerLinks, NavLinks } from './NavBar.Style'

const NavBar = () => {
  return (
    <NavContainer>
        <NavContainerLinks>
            <NavLinks>Home</NavLinks>
            <NavLinks>Contact</NavLinks>
            <NavLinks>About US</NavLinks>
        </NavContainerLinks>
    </NavContainer>
  )
}

export default NavBar