
import './App.css'

import { ToggleMode } from './assets/toggle dark and light mode/toggleMode.jsx'
import { Content } from './assets/Content/content.jsx'

function App() {
  

  return (
    <div id='appContainer'>
      <div className='header'><ToggleMode /></div>
      <div className='nav'></div>
      <div className='main'><Content /></div>
      <div className='aside'></div>
      <div className='footer'></div>
    </div>
  )
}

export default App
