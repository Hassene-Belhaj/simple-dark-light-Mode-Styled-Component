import React from 'react'
import { Container, DivToggle, GlobalStyle, ToggleOff, ToggleOn } from './Components/GlobalStyle/Global.Style'
import useLocalStorage from 'use-local-storage'
import NavBar from './Components/NavBar/NavBar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import { ThemeProvider } from 'styled-components'


const App = () => {
    const [theme,setTheme]  = useLocalStorage("dark")
  
    const HandleToggle = () => {
    theme ==="dark" ? setTheme("light") : setTheme("dark")
    }

    const light = {
      background : "#fff",
      color : "#000" ,
      transition : "0.4s ease-in-out"
    }

    const dark = {
      background : "#000",
      color : "#fff",
      transition : "0.4s ease-in-out"
    }

    
    return (
      <Router>
        <ThemeProvider theme={theme === "dark" ? light : dark}>
            <GlobalStyle />
            <Container>
              <DivToggle onClick={HandleToggle}>
                {theme==="dark" ?  <ToggleOn size={20}/>
                : 
                <ToggleOff color='#fff' size={20}/> }   
              </DivToggle>
              <NavBar />
              <Routes>
                <Route path='/home' element={<Home theme={theme}/>} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </Container>
        </ThemeProvider>
      </Router>
    )
    
  
}

export default App