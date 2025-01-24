import { useState } from 'react';

import styles from './content.module.css';


export function Content() {



    return (
        <>
            <main className={styles.content}>
                <div className={styles.imgArea}>
                    <img src='/images/Me2024.jpg' alt='Me in 2024'/>
                </div>
            </main>
        </>
    )
}