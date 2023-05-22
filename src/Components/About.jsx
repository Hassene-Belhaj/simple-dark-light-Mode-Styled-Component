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
color:${({color}) => (color ? '#ecfccb' : 'indigo')} ;

`


const About = ({color}) => {
  return (
    <Container>
  <Div color={color ? 1 :0}>
   about us
  </Div>
      </Container>
  )
}

export default About