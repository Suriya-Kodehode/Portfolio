import React, {useState} from 'react';
import styles from './toggleMode.module.css';



export function ToggleMode() {
    const [lightMode, setLightMode] = useState(false)

    const toggleLightMode = () => {
        setLightMode(!lightMode);
    }
    return (
        <div className={lightMode ? styles.lightmode : styles.darkmode}>
            <nav>
                <button onClick={toggleLightMode}>Mode</button>
            </nav>
        </div>
    )

}