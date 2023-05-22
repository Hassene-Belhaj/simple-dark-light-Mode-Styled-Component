import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
width: 100%;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
`
export const NavContainerLinks =styled.div`
width: 20%;
display: flex;
justify-content: space-between;
align-content: center;
`


export const NavLinks =styled(Link)`
font-size: 1.2rem;
text-decoration: none;
color: inherit;
`
