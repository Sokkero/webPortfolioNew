import React from 'react';
import styles from '../../../resources/scss/components/blocks/aboutMeParts/aboutMePast.scss';

function AboutMePast() {
    const educationEntries = [
        {
            date: "01.01.2001 - 31.12.2024",
            firstHeader: "First Part",
            lastHeader: "Last Part",
            text: "Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis?"
        },
        {
            date: "01.01.2001 - 31.12.2024",
            firstHeader: "First Part",
            lastHeader: "Last Part",
            text: "Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis?"
        },
        {
            date: "01.01.2001 - 31.12.2024",
            firstHeader: "First Part",
            lastHeader: "Last Part",
            text: "Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis?"
        }
    ];

    const experienceEntries = [
        {
            date: "01.01.2001 - 31.12.2024",
            firstHeader: "First Part",
            lastHeader: "Last Part",
            text: "Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis?"
        },
        {
            date: "01.01.2001 - 31.12.2024",
            firstHeader: "First Part",
            lastHeader: "Last Part",
            text: "Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis?"
        },
        {
            date: "01.01.2001 - 31.12.2024",
            firstHeader: "First Part",
            lastHeader: "Last Part",
            text: "Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis?"
        }
    ];

    return (
        <div className={styles.myPast}>
            <div className={styles.pastColumn}>
                <h2>Some Headline</h2>
                {experienceEntries.map((entry, index) => (
                    <div className={styles.entry} key={index}>
                        <div className={styles.entryContent}>
                            <div className={styles.entryHead}>
                                <span className={styles.entryDate}>&#xf073; {entry.date}</span>
                                <span className={styles.entryTitle}>
                                {entry.firstHeader}
                                <span className={styles.titleSeperator} />
                                <span className={styles.lastTitle}>{entry.lastHeader}</span>
                            </span>
                            </div>
                            <p>{entry.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.pastColumn}>
                <h2>Some Headline</h2>
                {educationEntries.map((entry, index) => (
                    <div className={styles.entry} key={index}>
                        <div className={styles.entryContent}>
                            <div className={styles.entryHead}>
                                <span className={styles.entryDate}>&#xf073; {entry.date}</span>
                                <span className={styles.entryTitle}>
                                {entry.firstHeader}
                                    <span className={styles.titleSeperator} />
                                <span className={styles.lastTitle}>{entry.lastHeader}</span>
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
