
import styles from './projectContents.module.css'

const ProjectBox = ({title, imageUrl, url, description}) => {
    return (
        <>
            <a href={url} target='_blank' rel='nooepener noreferrer' className={styles.projectBoxLink}>
                <div className={styles.projectBox}>
                    <p>{title}</p>
                    <img src={imageUrl} alt={title} />
                    <span>{description}</span>
                </div>
            </a>      
        </>
    )
}

export default ProjectBox