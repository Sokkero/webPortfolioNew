import React, {useContext} from 'react';
import styles from '../../resources/scss/components/aboutMeBlockWrapper.scss';
import {SizeContext} from "../../Store";

function AboutMeBlockWrapper() {
	const width = useContext(SizeContext)[0];
	const height = useContext(SizeContext)[1];

	return (
		<section id='aboutMeBlock' className={`${styles.aboutMeWrapper} contentBlock`}>
			<div className={styles.header}>
				<h2>About <span>me</span></h2>
				<span>Est secundus detrius, cesaris. Est secundus detrius, cesaris.</span>
			</div>
		</section>
	);
}

export default AboutMeBlockWrapper;
