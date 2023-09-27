import React from 'react';
import styles from '../../../resources/scss/components/blocks/aboutMeParts/aboutMeHeader.scss';
import {AboutMeTexts} from "../../../resources/texts";

function AboutMeHeader() {
    return (
        <div className={styles.header}>
            <h2>{AboutMeTexts.headlineWhite}<span>{AboutMeTexts.headlineAccent}</span></h2>
            <span>{AboutMeTexts.subHeadline}</span>
        </div>
    );
}

export default AboutMeHeader;
