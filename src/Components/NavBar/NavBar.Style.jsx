import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`
export const NavContainerLinks =styled.div`
width: 20%;
display: flex;
justify-content: space-between;
align-content: center;
@media screen and (max-width : 1480px) {
    width : 40% ;
}
@media screen and (max-width : 880px) {
    width : 60% ;
}
@media screen and (max-width : 580px) {
    width : 80% ;
}
`


export const NavLinks =styled(Link)`
font-size: 1.2rem;
text-decoration: none;
color:inherit;
`
