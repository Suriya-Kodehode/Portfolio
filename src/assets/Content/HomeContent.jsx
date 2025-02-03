
import styles from './HomeContent.module.css';
import ProjectBox from '../Components/Links/Projects/projectContents.jsx';
import ContactLink from '../Components/Links/Contact/ContactLink.jsx';
import '../customName.css'

import Me2024 from '/images/Me2024.svg'

import { projects, linkBox } from '../DataSet/Data.jsx'

export default function Content() {
    
    return (
        <>
            <main className={styles.content}>
                <div className={styles.frameContainer}>
                    <div className={styles.container}>
                        <div className={styles.myImg}>
                            <div className={styles.imgContainer}>
                                <img src={Me2024} alt='Me in 2024'/>
                            </div>
                            <div className={styles.imgText}>
                                <h2>Suriya Suntiviraporn</h2>
                                <p>Hei! jeg heter Suriya,  en webdeveloper med omtrent 6 måneder erfering fra kurset ved Jobbloop hvor jeg har lært JavaScript, HTML, CSS og Figma. </p>
                            </div>
                        </div>
                        <div className={styles.myContact}>
                            <h2>Kontakt info</h2>
                            <div className={styles.infoLink}>
                                <a href='mailto:suriya.kodehode@gmail.com'>suriya.kodehode@gmail.com</a>
                                <div className={styles.linkTo}>
                                    {linkBox.map(({text, iconLight, iconDark, textTitleLight, textTitleDark, url}, index) => (
                                        <ContactLink 
                                            key={index}
                                            text={text}
                                            iconLight={iconLight}
                                            iconDark={iconDark}
                                            textTitleLight={textTitleLight}
                                            textTitleDark={textTitleDark}
                                            url={url}
                                        />
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projectContainer}>
                        <h2>Prosjekter</h2>
                        <div className={styles.projectSubContainer}>
                            {projects.map(({title, imageUrl, backgroundColor, url}, index) => (
                                <ProjectBox 
                                    key={index}
                                    title={title}
                                    imageUrl={imageUrl}
                                    backgroundColor={backgroundColor}
                                    url={url}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}