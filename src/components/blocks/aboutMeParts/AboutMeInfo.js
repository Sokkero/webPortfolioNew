import React from 'react';
import styles from '../../../resources/scss/components/blocks/aboutMeParts/aboutMeInfo.scss';
import meImg from "../../../resources/images/darkAbout.jpg";
import {ButtonA, ButtonTypes} from "../../parts/buttons";
import {AboutMeContent} from "../../../resources/content";

function AboutMeInfo() {
    return (
        <div className={styles.myInfo}>
            <div className={styles.imageContainer}>
                <img src={meImg} alt={AboutMeContent.myInfoTexts.imageAlt} />
            </div>
            <div className={styles.myInfoWrapper}>
                <div className={styles.myInfoColumn}>
                    <ul>
                        {AboutMeContent.myInfoTexts.leftColumnEntries.map((entry, index) => (
                            <li key={index}>
                                <h5>
                                    <span>{entry.firstPart}</span>
                                    {entry.lastPart}
                                </h5>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.myInfoColumn}>
                    <ul>
                        {AboutMeContent.myInfoTexts.rightColumnEntries.map((entry, index) => (
                            <li key={index}>
                                <h5>
                                    <span>{entry.firstPart}</span>
                                    {entry.lastPart}
                                </h5>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.myInfoBottom}>
                    <ButtonA
                        href={'https://www.google.com/'}
                        text={AboutMeContent.myInfoTexts.cvBtnText}
                        buttonType={ButtonTypes.DarkButton}
                        isNavigator={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutMeInfo;
