import React from 'react';
import styles from '../../../resources/scss/components/blocks/aboutMeParts/aboutMeInfo.scss';
import meImg from "../../../resources/images/darkAbout.jpg";
import ButtonA, {ButtonTypes} from "../../inputs/buttonA";
import {AboutMeTexts} from "../../../resources/texts";

function AboutMeInfo() {
    return (
        <div className={styles.myInfo}>
            <div className={styles.imageContainer}>
                <img src={meImg} alt={AboutMeTexts.myInfoTexts.imageAlt} />
            </div>
            <div className={styles.myInfoWrapper}>
                <div className={styles.myInfoColumn}>
                    <ul>
                        {AboutMeTexts.myInfoTexts.leftColumnEntries.map((entry, index) => (
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
                        {AboutMeTexts.myInfoTexts.rightColumnEntries.map((entry, index) => (
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
                        text={AboutMeTexts.myInfoTexts.cvBtnText}
                        buttonType={ButtonTypes.DarkButton}
                        isNavigator={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutMeInfo;
