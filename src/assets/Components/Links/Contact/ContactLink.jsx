import { useTheme } from '../../toggleTheme/ThemeContext'
import styles from './ContactLink.module.css'

const ContactLink = ({ text, iconLight, iconDark,textTitleLight, textTitleDark, url }) => {
    const {theme} = useTheme()
    return (
        <>
            <a href={url} target='_blank' rel='nooepener noreferrer' className={styles.linkBox}>
                <p>{text}</p>
                <div className={styles.iconContainer}>
                    <img 
                    src={theme === 'light' ? iconDark : iconLight} 
                    alt={theme === 'light' ? textTitleDark : textTitleLight} />
                </div>
            </a>
        </>
    )
}

export default ContactLink