import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './assets/Components/toggleTheme/ThemeContext.jsx'

import Home from './assets/Pages/Home/Home.jsx'
import Skills from './assets/Pages/Skills/Skill.jsx'

import './App.css'

function App() {
  

  return (
    <ThemeProvider>
        <Router basename='/Portfolio-forsettelse-oppgave'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/skills' element={<Skills/>}/>
          </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
