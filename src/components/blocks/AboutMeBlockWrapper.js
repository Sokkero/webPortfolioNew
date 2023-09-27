import React from 'react';
import styles from '../../resources/scss/components/blocks/aboutMeBlockWrapper.scss';
import AboutMeHeader from "./aboutMeParts/AboutMeHeader";
import AboutMeInfo from "./aboutMeParts/AboutMeInfo";
import AboutMePast from "./aboutMeParts/AboutMePast";

function AboutMeBlockWrapper() {
	return (
		<section id='aboutMeBlock' className={`${styles.aboutMeWrapper} contentBlock`}>
			<div className={styles.contentWrapper}>
				{AboutMeHeader()}
				{AboutMeInfo()}
				<span className={styles.seperator}/>
				{AboutMePast()}
				<span className={styles.seperator}/>
			</div>
		</section>
	);
}

export default AboutMeBlockWrapper;
