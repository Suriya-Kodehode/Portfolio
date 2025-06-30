
import styles from './mode.module.css';

import { useTheme } from './ThemeContext.jsx';

import path from "@/assets/DataSet/FileManager.js";

const ToggleMode = () => {
    const { theme, toggleTheme } = useTheme()
    const icons = path("icons", [{
        lightImage: "sun-light.svg",
        darkImage: "moon-dark.svg",
    }])

    return (
        <div className={styles.container}>
             <nav id={styles.themeContainer}>
                <button 
                    id={styles.themeButton} 
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    className='theme-toggle'
                >
                    <img 
                         id={styles.modeImage}  
                         src={theme === 'light' ? icons.darkImage : icons.lightImage} 
                         alt={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    />
                </button>
            </nav>
        </div>
    )
}

export default ToggleMode