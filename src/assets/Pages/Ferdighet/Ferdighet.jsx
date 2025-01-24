import styles from './ferdighet.module.css'

import { Header } from '../../Components/Header/header.jsx'
import { ToggleMode } from '../../Components/toggleTheme/toggleMode.jsx'

function Ferdighet() {

    return (
        <>
            <div className={styles.ferdighetContainer}>
                <div className={styles.header}>
                    <ToggleMode />
                    <Header />
                </div>
            </div>
            <div className={styles.main}>

            </div>
            <div className={styles.footer}>

            </div>
        </>
    )
}

export default Ferdighet