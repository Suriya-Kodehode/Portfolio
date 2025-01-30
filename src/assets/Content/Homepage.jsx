
import styles from './Homepage.module.css';
import { useTheme } from '../Components/toggleTheme/ThemeContext.jsx'
import ProjectBox from '../Components/Projects/projectContents.jsx';

import gitIconBlack from '/images/Icon=GitIcon, Color=Black.svg'
import gitIconWhite from '/images/Icon=GitIcon, Color=White.svg'
import downloadIconBlack from '/images/Icon=Download, Color=Black.svg'
import downloadIconWhite from '/images/Icon=Download, Color=White.svg'

import Me2024 from '/images/Me2024.svg'

const projects = [
    {
        title: 'Gruppeprosjekt',
        imageUrl: '/images/project_sample1.svg',
        backgroundColor: '#894141',
        url: 'https://suriya-kodehode.github.io/ViteNPM-prosjekt/',
    },
    {
        title: 'Restaurantmenyen',
        imageUrl: '/images/project_sample2.svg',
        backgroundColor: '#4A4292',
        url: 'https://suriya-kodehode.github.io/React-Oppgave-1-2---Restaurantmenyen/',
    },
    {
        title: 'Placeholder, project nr. 3',
        imageUrl: '/images/project_sample3.svg',
        backgroundColor: '#125754',
        url: 'blank',
    },

]

export default function Content() {
    const {theme}  = useTheme()
    
    

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
                                    <div className={styles.linkBox}>
                                        <p>GitHub</p>
                                        <div className={styles.iconContainer}>
                                            <img 
                                            src={theme === 'light' ? gitIconBlack : gitIconWhite} 
                                            alt={theme === 'light' ? 'Git icon black' : 'Git icon white'} />
                                        </div>
                                    </div>
                                    <div className={styles.linkBox}>
                                        <p>Last ned CV</p>
                                        <div className={styles.iconContainer}>
                                            <img 
                                            src={theme === 'light' ? downloadIconBlack : downloadIconWhite} 
                                            alt={theme === 'light' ? 'Download icon for dark mode' : 'Download icon for light mode'} />
                                        </div>
                                    </div>
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