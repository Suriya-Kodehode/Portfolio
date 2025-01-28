import { useState } from 'react';

import styles from './content.module.css';


export function Content() {



    return (
        <>
            <main className={styles.content}>
                <div className={styles.frameContainer}>
                    <div className={styles.container}>
                        <div className={styles.myImg}>
                            <div className={styles.imgContainer}>
                                <img src='/images/Me2024.jpg' alt='Me in 2024'/>
                            </div>
                            <div className={styles.imgText}>
                                <h2>Suriya Suntiviraporn</h2>
                                <p>Hei! jeg heter Suriya,  en webdeveloper med omtrent 6 måneder erfering fra kurset ved Jobbloop hvor jeg har lært JavaScript, HTML, CSS og Figma. </p>
                            </div>
                        </div>
                        <div className={styles.myContact}>
                            <h3>Kontakt info</h3>
                            <div className={styles.infoLink}>
                                <a href='mailto:suriya.kodehode@gmail.com'>suriya.kodehode@gmail.com</a>
                                <div className={styles.linkTo}>
                                    <div className={styles.linkBox}>
                                        <p>GitHub</p>
                                    </div>
                                    <div className={styles.linkBox}>
                                        <p>CV</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}