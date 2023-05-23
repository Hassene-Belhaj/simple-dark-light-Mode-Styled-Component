import React from 'react'
import { Container, DivToggle, GlobalStyle, ToggleOff, ToggleOn } from './Components/GlobalStyle/Global.Style'
import useLocalStorage, { uselocalStorage } from 'use-local-storage'
import NavBar from './Components/NavBar/NavBar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'

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
         {toggle ?  <ToggleOn size={30}/>: <ToggleOff color='orangered' size={30}/> }   
        </DivToggle>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home color={color ? 1: 0}/>} />
          <Route path='/contact' element={<Contact color={color ? 1: 0}/>} />
          <Route path='/about' element={<About color={color ? 1: 0}/>} />
        </Routes>
      </Container>
      </Router>
    )
    
  
}

export default App