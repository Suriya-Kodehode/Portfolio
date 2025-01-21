
import './App.css'

import { ToggleMode } from './assets/toggleTheme/toggleMode.jsx'
import { Content } from './assets/Content/content.jsx'

function App() {
  

  return (
    <div id='appContainer'>
      <div className='header'><ToggleMode /></div>
      
      <div className='main'><Content /></div>
      
      <div className='footer'></div>
    </div>
  )
}

export default App
