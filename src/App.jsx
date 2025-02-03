
import { ThemeProvider } from './assets/Components/toggleTheme/ThemeContext.jsx'
import { Outlet } from 'react-router-dom'

import Header from './assets/Components/Header/header.jsx'
import ToggleMode from './assets/Components/toggleTheme/toggleMode.jsx'

import './App.css'

function App() {
  

  return (
    <ThemeProvider>
      <div className='appContainer'>
        <header>
            <ToggleMode />
            <Header />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>

        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
