
import styles from './home.module.css';

import { Header } from '../../Components/Header/header.jsx'
import { ToggleMode } from '../../Components/toggleTheme/toggleMode.jsx'
import { Content } from '../../Content/content.jsx'

function Home() {

    return (
        <div id={styles.homeContainer}>
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

export default Home;