import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100vh;
text-align: center;
`
const Div = styled.div`
width: 60%;
height: 100%;
padding-top: 10rem;
margin: auto;
color:${({theme}) => (theme.color)} ;
`


const Contact = ({theme}) => {
  return (
    <Container>
  <Div theme={theme}>
contact
  </Div>
    </Container>
  )
}

export default Contact