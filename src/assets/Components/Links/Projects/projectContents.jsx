
import styles from './projectContents.module.css'

const ProjectBox = ({title, imageUrl, backgroundColor, url}) => {
    return (
        <>
            <a href={url} target='_blank' rel='nooepener noreferrer' className={styles.projectBoxLink}>
                <div className={styles.projectBox} style={{background: backgroundColor}}>
                    <p>{title}</p>
                    <img src={imageUrl} alt={title} />
                </div>
            </a>      
        </>
    )
}

export default ProjectBox