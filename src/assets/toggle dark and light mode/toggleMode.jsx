import React, {useState, useEffect} from 'react';
import styles from './mode.module.css';

import lightImage from '/images/sun-light.svg';
import darkImage from '/images/moon-dark.svg';


export function ToggleMode() {
    const [lightMode, setLightMode] = useState(false)

    const toggleLightMode = () => {
        setLightMode(!lightMode);
    }
    useEffect(() => {
        if (lightMode) {
            document.body.classList.add('lightmode');
            document.body.classList.remove('darkmode');
        } else {
            document.body.classList.add('darkmode');
            document.body.classList.remove('lightmode');
        }
    })

    return (
        <div className={styles.container}>
             <nav id={styles.themeContainer}>
                <button id={styles.themeButton} onClick={toggleLightMode}>
                    <img id={styles.modeImage} src={lightMode ? darkImage : lightImage} alt={lightMode ? 'Light Mode' : 'Dark Mode'}/>
                </button>
            </nav>
        </div>
    )

}