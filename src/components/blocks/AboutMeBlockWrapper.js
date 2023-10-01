import React from 'react';
import styles from '../../resources/scss/components/blocks/aboutMeBlockWrapper.scss';
import {AboutMeContent} from "../../resources/content";
import BlockHeader from "../parts/blockHeader";
import AboutMeInfo from "./aboutMeParts/AboutMeInfo";
import AboutMePast from "./aboutMeParts/AboutMePast";
import AboutMeSkills from "./aboutMeParts/AboutMeSkills";

function AboutMeBlockWrapper() {
	return (
		<section id='aboutMeBlock' className={`${styles.aboutMeWrapper} contentBlock`}>
			<div className={styles.contentWrapper}>
				<BlockHeader
					headlineWhite={AboutMeContent.headlineWhite}
					headlineMainColor={AboutMeContent.headlineAccent}
					subHeadline={AboutMeContent.subHeadline}
				/>
				<AboutMeInfo />
				<span className={styles.seperator}/>
				<AboutMePast />
				<span className={styles.seperator}/>
				<AboutMeSkills />
			</div>
		</section>
	);
}

export default AboutMeBlockWrapper;
