import React from 'react';
import styles from '../../resources/scss/components/pageWrapper.scss';
import Navigator from "../inputs/navigator";
import HomeBlockWrapper from '../blocks/HomeBlockWrapper';
import AboutMeBlockWrapper from "../blocks/AboutMeBlockWrapper";

function PageWrapper() {

	return (
		<div className={styles.wrapper}>
			<Navigator />
			{/*<HomeBlockWrapper/>*/}
			<AboutMeBlockWrapper />
			<section id='portfolioBlock' className={`${styles.portfolioBlock} ${styles.contentBlock} contentBlock`}>

			</section>
			<section id='contactBlock' className={`${styles.contactBlock} ${styles.contentBlock} contentBlock`}>

			</section>
			<section id='blogBlock' className={`${styles.blogBlock} ${styles.contentBlock} contentBlock`}>

			</section>
		</div>
	);
}

export default PageWrapper;
