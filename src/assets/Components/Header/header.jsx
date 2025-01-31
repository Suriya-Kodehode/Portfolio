

import { Link, useLocation } from 'react-router-dom';

import styles from './header.module.css';
import { useTheme } from '../toggleTheme/ThemeContext';

function Header() {
    const location = useLocation();
    const { theme } = useTheme()
    const activeClass = theme === 'light' ? styles.lightPageActive : styles.darkPageActive

    return (
        <div className={styles.container}>
           <nav>
                <ul>
                    <li className={`${location.pathname === '/' ? activeClass : ''}`}>
                        <Link to='/'>Forside</Link>
                    </li>
                    <li className={`${location.pathname === '/skills' ? activeClass : ''}`}>
                        <Link to='/skills'>Ferdigheter</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
