import React, {useState, useEffect, useContext} from 'react';
import styles from './mode.module.css';

import { SavedTheme } from './savedTheme';

import lightImage from '/images/sun-light.svg';
import darkImage from '/images/moon-dark.svg';

export const ToggleMode = () => {
    const { theme, setTheme } = useContext(SavedTheme)
    
    const toggleTheme = () => {
        // console.log('Theme before toggle:', theme);
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
        // console.log('Theme after toggle:', theme);
    }
    useEffect(() => {
            const themeSaved = localStorage.getItem('theme')
            if (themeSaved) {
                setTheme(themeSaved)
            }
        }, []);
    
    useEffect(() => {
        document.documentElement.className = theme;
        // console.log('Theme effect applied:', theme);
    }, [theme],)

    return (
        <div className={styles.container}>
             <nav id={styles.themeContainer}>
                <button id={styles.themeButton} onClick={toggleTheme}>
                     <img id={styles.modeImage}  
                    src={theme === 'dark' ? lightImage : darkImage} 
                    alt={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}/>
                </button>
            </nav>
        </div>
    )
}

// export function ToggleMode() {
//     const [lightMode, setLightMode] = useState(false)

//     const toggleTheme = () => {
//         setLightMode(!lightMode);
//     }
//     useEffect(() => {
//         if (lightMode) {
//             root.classList.add('lightmode');
//             root.classList.remove('darkmode');
//         } else {
//             root.classList.add('darkmode');
//             root.classList.remove('lightmode');
//         }
//     }, [lightMode])

//     return (
//         <div className={styles.container}>
//              <nav id={styles.themeContainer}>
//                 <button id={styles.themeButton} onClick={toggleTheme}>
//                     <img id={styles.modeImage}  
//                     src={lightMode ? darkImage : lightImage} 
//                     alt={lightMode ? 'Dark Mode' : 'Light Mode'}/>
//                 </button>
//             </nav>
//         </div>
//     )

// }