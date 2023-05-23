import React from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
width: 100%;
height: 100vh;
text-align: center;
`
const Div = styled.div`
width: 100%;
height: 100%;
padding-top: 10rem;
margin: auto;
color:${({theme}) => (theme==="dark" ? "red":"blue")} ;
`


const Home = ({theme}) => {
  return (
  <Container>
   <Div theme={theme}>
    <p>home</p>
   </Div>
  </Container>
  )
}

export default Home