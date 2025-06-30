
import styles from './mode.module.css';

import { useMode } from './ThemeContext.jsx';

import path from "@/assets/DataSet/FileManager.js";

const ToggleMode = () => {
    const { mode, toggleMode } = useMode()
    const icons = path("icons", [{
        lightImage: "sun-light.svg",
        darkImage: "moon-dark.svg",
    }])

    return (
        <div className={styles.container}>
             <nav id={styles.themeContainer}>
                <button 
                    id={styles.themeButton} 
                    onClick={toggleMode}
                    aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
                    className='theme-toggle'
                >
                    <img 
                         id={styles.modeImage}  
                         src={mode === 'light' ? icons.darkImage : icons.lightImage} 
                         alt={mode === 'light' ? 'Dark Mode' : 'Light Mode'}
                    />
                </button>
            </nav>
        </div>
    )
}

export default ToggleMode