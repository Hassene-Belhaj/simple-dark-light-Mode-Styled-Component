import { createGlobalStyle } from 'styled-components'
import { styled } from 'styled-components'
import { BsFillMoonFill,BsFillSunFill } from 'react-icons/bs'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    html{
        scroll-behavior  :smooth ;
        overflow: hidden;
    }

    `
export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content:flex-end;
align-items: center;
background: ${({color})=>(color ? "#000" : "#fff")};
color: ${({color})=>(color ? "#fff" : "#4b5563")};
font-size: 1rem;
font-family: 'Poppins',sans-serif;
font-weight: 500;
transition: all 0.25s ease;
padding-top: 1rem;
`
export const DivToggle = styled.div`
width: 100%;
display:flex;
justify-content: flex-end;
align-items: center;
margin: auto;
padding-right: 1rem;
`

export const ToggleOn = styled(BsFillMoonFill)`
margin-right: 1rem;
cursor: pointer;
`
export const ToggleOff = styled(BsFillSunFill)`
margin-right: 1rem;
cursor: pointer;
`