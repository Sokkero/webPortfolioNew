import React from 'react';
import styles from '../../resources/scss/components/pageWrapper.scss';
import HomeBlockWrapper from '../blocks/HomeBlockWrapper';
import Navigator from "../inputs/navigator";

function PageWrapper() {

	return (
		<div className={styles.wrapper}>
			<Navigator />
			<HomeBlockWrapper />
			<section id='aboutMeBlock' className={`${styles.aboutMeBlock} ${styles.contentBlock} contentBlock`}>

			</section>
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
