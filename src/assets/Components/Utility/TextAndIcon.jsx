import React from 'react';

const TextAndIcon = ({textLogo}) => {
    const styles = {
        textAndIcon: { marginBottom: "1rem" },
        image: { width: '32px', height: '32px' },
        text: { margin: 0 }
    }
    return (
        <>
            {textLogo.map(({text, icon}, index) => (
                <div key={index} style={styles.textAndIcon}>
                    {icon ? (
                        <img src={icon} alt={`${text} icon`} style={styles.image} />
                    ) : null}
                    <p style={styles.text}>{text}</p>
                </div>
            ))}
        </>
    )
}

export default TextAndIcon
