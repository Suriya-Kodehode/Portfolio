import styles from './Skill.module.css'

import Header from '../../Components/Header/header.jsx'
import ToggleMode from '../../Components/toggleTheme/toggleMode.jsx'
import SkillContent from '../../Content/SkillContent.jsx'

function Skills() {

    return (
        <>
            <div className={styles.skillContainer}>
                <div className={styles.header}>
                    <ToggleMode />
                    <Header />
                </div>
                <div className={styles.main}>
                    <SkillContent />
                </div>
                <div className={styles.footer}>

                </div>
            </div>
            
            
        </>
    )
}

export default Skills