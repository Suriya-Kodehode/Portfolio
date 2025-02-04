import React from 'react';
import styles from './TextAndIcon.module.css'

const TextAndIcon = ({textLogo}) => {
    return (
        <>
            {textLogo.map(({text, icon}, index) => (
                <div key={index} className={styles.TextAndIcon}>
                    {icon ? (
                        <img src={icon} alt={`${text} icon`} />
                    ) : null}
                    <p>{text}</p>
                </div>
            ))}
        </>
    )
}

export default TextAndIcon
