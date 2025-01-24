import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './assets/Pages/Home/Home.jsx'
import Ferdighet from './assets/Pages/Ferdighet/Ferdighet.jsx'

import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/ferdighet' element={<Ferdighet/>}/>
      </Routes>
    </Router>
  )
}

export default App
