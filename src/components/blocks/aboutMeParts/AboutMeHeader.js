import React from 'react';
import styles from '../../../resources/scss/components/blocks/aboutMeParts/aboutMeHeader.scss';

function AboutMeHeader() {
    return (
        <div className={styles.header}>
            <h2>About <span>me</span></h2>
            <span>Est secundus detrius, cesaris. Est secundus detrius, cesaris.</span>
        </div>
    );
}

export default AboutMeHeader;
