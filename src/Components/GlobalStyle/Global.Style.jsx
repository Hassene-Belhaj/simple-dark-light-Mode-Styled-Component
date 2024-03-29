import { createGlobalStyle } from 'styled-components'
import { styled } from 'styled-components'
import { BsFillMoonFill,BsFillSunFill } from 'react-icons/bs'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html{
        scroll-behavior:smooth ;
        overflow: hidden;
        background: ${({theme})=>(theme.background)};
        color: ${({theme})=>(theme.color)};
        transition: ${({theme})=>theme.transition};
    }

    `
export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content:flex-end;
align-items: center;
font-size: 1rem;
font-family: 'Poppins',sans-serif;
font-weight: 500;
transition: all 0.25s ease;
padding-top: 8px;
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
margin: 1rem;
cursor: pointer;
`
export const ToggleOff = styled(BsFillSunFill)`
margin: 1rem;
cursor: pointer;
`