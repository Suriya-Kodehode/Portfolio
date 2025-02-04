

import styles from './SkillContent.module.css'

import TextAndIcon from '../Components/Utility/TextAndIcon.jsx';
import { courseSkills, otherSkills, selvTaughtSkills } from '../DataSet/Data.jsx'

export default function SkillContent () {

    const otherRow1 = [otherSkills[0], otherSkills[1]]
    const otherRow2 = [otherSkills[2], otherSkills[3]];
    const otherRow3 = [otherSkills[4]]
    const selvRow1 = [selvTaughtSkills[0], selvTaughtSkills[1]]
    const selvRow2 = [selvTaughtSkills[2]]
   
    return (
        <>
            <main className={styles.mainContainer}>
                <div className={styles.container}>
                    <h2>Ferdigheter</h2>
                    <div className={styles.subContainer}>
                        <h3>Ferdigheter ved kurset</h3>
                        <div className={styles.nestedContainer}>
                            <TextAndIcon textLogo={courseSkills}/>
                        </div>
                    </div>
                    <div className={styles.subContainer}>
                        <h3>Andre ferdigheter</h3>
                        <div className={styles.nestedContainer}>
                            <div className={styles.otherSkills}>
                                <div className={styles.otherRow1}> 
                                    <TextAndIcon textLogo={otherRow1}/>
                                </div>
                                <div>
                                    <TextAndIcon textLogo={otherRow2}/>
                                </div>
                                <div>
                                    <TextAndIcon textLogo={otherRow3}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subContainer}>
                        <h3>Selvlært</h3>
                        <div className={styles.nestedContainer}>
                            <div className={styles.selvTaughtSkills}>
                                <div className={styles.selvRow1}>
                                    <TextAndIcon textLogo={selvRow1}/>
                                </div>
                                <div>
                                    <TextAndIcon textLogo={selvRow2}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}