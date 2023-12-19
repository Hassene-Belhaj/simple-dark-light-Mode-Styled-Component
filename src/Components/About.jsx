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
`


const About = () => {
  return (
    <Container>
        <Div>
           about us
        </Div>
      </Container>
  )
}

export default About