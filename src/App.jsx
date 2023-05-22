import React from 'react'
import { Container, DivToggle, GlobalStyle, ToggleOff, ToggleOn } from './Components/GlobalStyle/Global.Style'
import ItemOne from './Components/ItemOne'
import ItemTwo from './Components/ItemTwo'
import useLocalStorage, { uselocalStorage } from 'use-local-storage'
import NavBar from './Components/NavBar/NavBar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {

    const [color,setColor]  = useLocalStorage(false)
    const [toggle,setToggle] = useLocalStorage(false)
  
    const HandleToggle = () => {
        setToggle(!toggle)
        setColor(!color) 
    }
    
    return (
      <Router>
       <GlobalStyle />
      <Container color={color ? 1 : 0 }>
        <DivToggle onClick={HandleToggle}>
         {toggle ?  <ToggleOn size={30}/>: <ToggleOff size={30}/> }   
        </DivToggle>
        <NavBar />
      </Container>
      </Router>
    )
    
  
}

export default App