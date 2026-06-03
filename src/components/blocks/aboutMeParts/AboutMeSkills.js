import React from 'react';
import styles from '../../../resources/scss/components/blocks/aboutMeParts/aboutMeSkills.module.scss';
import {AboutMeContent} from "../../../resources/content";

function AboutMeSkills() {
    return (
        <div className={styles.mySkills}>
            <h2>Skills</h2>

            {AboutMeContent.mySkillsContent.skillEntries.map((entry, index) => (
                <div className={styles.entry} key={index}>
                    <span className={styles.skillName}>{entry.skillName}</span>
                    <span className={styles.skillMeter}>
                    <span
                        className={styles.skillBar}
                        style={{width: entry.percentage}}
                    />
                    <span
                        className={styles.skillBox}
                        style={{right: `calc((100% - ${entry.percentage}) - 23px)`}}
                    >{entry.percentage}</span>
                </span>
                </div>
            ))}
        </div>
    );
}

export default AboutMeSkills;
