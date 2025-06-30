import { useMode } from '../../toggleTheme/ThemeContext'
import styles from './ContactLink.module.css'

const ContactLink = ({ text, iconLight, iconDark,textTitleLight, textTitleDark, url }) => {
    const {mode} = useMode()
    return (
        <>
            <a href={url} target='_blank' rel='nooepener noreferrer' className={styles.linkBox}>
                <p className={styles.text}>{text}</p>
                <div className={styles.iconContainer}>
                    <img 
                    src={mode === 'light' ? iconDark : iconLight} 
                    alt={mode === 'light' ? textTitleDark : textTitleLight} />
                </div>
            </a>
        </>
    )
}

export default ContactLink