
import styles from './mode.module.css';

import { useTheme } from './ThemeContext.jsx';

import lightImage from '/images/sun-light.svg';
import darkImage from '/images/moon-dark.svg';

export const ToggleMode = () => {
    const { theme, toggleTheme } = useTheme()

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
                         src={theme === 'light' ? darkImage : lightImage} 
                         alt={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    />
                </button>
            </nav>
        </div>
    )
}