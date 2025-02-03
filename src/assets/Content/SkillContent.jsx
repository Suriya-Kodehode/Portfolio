
import styles from './SkillContent.module.css'

import { courseSkills, otherSkills, selvTaughtSkills } from '../DataSet/Data.jsx'

export default function SkillContent () {

    const otherRow1 = otherSkills.filter(skill => skill === 'Unity' || skill === 'C#')
    const otherRow2 = [otherSkills[2], otherSkills[3]];
    const otherRow3 = otherSkills.slice(4)
   


    return (
        <>
            <main className={styles.mainContainer}>
                <div className={styles.container}>
                    <h2>Ferdigheter</h2>
                    <div className={styles.subContainer}>
                        <h3>Ferdigheter ved kurset</h3>
                        <div className={styles.nestedContainer}>
                            {courseSkills.map((skill, index) => (
                                <p key={index}>{skill}</p>
                            ))}
                        </div>
                    </div>
                    <div className={styles.subContainer}>
                        <h3>Andre ferdigheter</h3>
                        <div className={styles.nestedContainer}>
                            <div className={styles.otherSkills}>
                                <div className={styles.otherRow1}> 
                                    {otherRow1.map((skill, index) => (
                                        <p key={index}>{skill}</p>
                                    ))}
                                </div>
                                <div>
                                    {otherRow2.map((skill, index) => (
                                        <p key={index}>{skill}</p>
                                    ))}
                                </div>
                                <div>
                                    {otherRow3.map((skill, index) => (
                                        <p key={index}>{skill}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subContainer}>
                        <h3>Selvlært</h3>
                        <div className={styles.nestedContainer}>
                            {selvTaughtSkills.map((skill, index) => (
                                <p key={index}>{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}