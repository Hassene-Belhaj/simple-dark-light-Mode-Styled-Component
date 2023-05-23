import React from 'react'
import { NavContainer, NavContainerLinks, NavLinks } from './NavBar.Style'

const NavBar = ({theme}) => {
  return (
    <NavContainer>
        <NavContainerLinks >
           
            <NavLinks to={'/home'}>Home</NavLinks>

            <NavLinks to={'/contact'}>Contact</NavLinks>

            <NavLinks to={'/about'}>About US</NavLinks>

        </NavContainerLinks>
    </NavContainer>
  )
}

export default NavBar