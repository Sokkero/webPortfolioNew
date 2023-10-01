import React from 'react';
import styles from '../../../resources/scss/components/blocks/aboutMeParts/aboutMePast.scss';
import {AboutMeContent} from "../../../resources/content";

function AboutMePast() {
    return (
        <div className={styles.myPast}>
            <div className={styles.pastColumn}>
                <h2>{AboutMeContent.myPastTexts.experienceColumn.headline}</h2>
                {AboutMeContent.myPastTexts.experienceColumn.entries.map((entry, index) => (
                    <div className={styles.entry} key={index}>
                        <div className={styles.entryContent}>
                            <div className={styles.entryHead}>
                                <span className={styles.entryDate}>&#xf073; {entry.date}</span>
                                <span className={styles.entryTitle}>
                                {entry.firstHeadline}
                                <span className={styles.titleSeperator} />
                                <span className={styles.lastTitle}>{entry.lastHeadline}</span>
                            </span>
                            </div>
                            <p>{entry.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.pastColumn}>
                <h2>{AboutMeContent.myPastTexts.educationColumn.headline}</h2>
                {AboutMeContent.myPastTexts.educationColumn.entries.map((entry, index) => (
                    <div className={styles.entry} key={index}>
                        <div className={styles.entryContent}>
                            <div className={styles.entryHead}>
                                <span className={styles.entryDate}>&#xf073; {entry.date}</span>
                                <span className={styles.entryTitle}>
                                {entry.firstHeadline}
                                    <span className={styles.titleSeperator} />
                                <span className={styles.lastTitle}>{entry.lastHeadline}</span>
                            </span>
                            </div>
                            <p>{entry.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutMePast;
