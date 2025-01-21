
import './App.css'

import { Header } from './assets/Header/header.jsx'
import { ToggleMode } from './assets/toggleTheme/toggleMode.jsx'
import { Content } from './assets/Content/content.jsx'

function App() {
  

  return (
    <div id='appContainer'>
      <div className='header'>
        <ToggleMode />
        <Header />
      </div>
      
      <div className='main'>
        <Content />
        </div>
      
      <div className='footer'>

      </div>
    </div>
  )
}

export default App
