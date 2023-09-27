import React from 'react';
import styles from '../../../resources/scss/components/blocks/aboutMeParts/aboutMeInfo.scss';
import meImg from "../../../resources/images/darkAbout.jpg";
import ButtonA, {ButtonTypes} from "../../inputs/buttonA";

function AboutMeInfo() {

    const entriesLeft = [
        ["Something", "else entirely"],
        ["Something", "else entirely"],
        ["Something", "else entirely"],
        ["Something", "else entirely"],
        ["Something", "else entirely"],
    ];

    const entriesRight = [
        ["Something", "else entirely"],
        ["Something", "else entirely"],
        ["Something", "else entirely"],
        ["Something", "else entirely"],
        ["Something", "else entirely"],
    ];

    return (
        <div className={styles.myInfo}>
            <div className={styles.imageContainer}>
                <img src={meImg} alt={'A picture of me'} />
            </div>
            <div className={styles.myInfoWrapper}>
                <div className={styles.myInfoColumn}>
                    <ul>
                        {entriesLeft.map((entry) => (
                            <li>
                                <h5>
                                    <span>{entry[0]}</span>
                                    {entry[1]}
                                </h5>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.myInfoColumn}>
                    <ul>
                        {entriesRight.map((entry) => (
                            <li>
                                <h5>
                                    <span>{entry[0]}</span>
                                    {entry[1]}
                                </h5>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.myInfoBottom}>
                    <ButtonA
                        href={'https://www.google.com/'}
                        text={"&#xf007; Download my CV"}
                        buttonType={ButtonTypes.DarkButton}
                        isNavigator={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutMeInfo;
