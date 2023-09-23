import React from 'react';
import styles from '../../resources/scss/pageWrapper.scss';
import HomeBlockWrapper from '../blocks/HomeBlockWrapper';

function PageWrapper() {

	return (
		<div className={styles.wrapper}>
			<HomeBlockWrapper />
			<section id='aboutMeBlock' className={`${styles.aboutMeBlock} ${styles.contentBlock}`}>

			</section>
			<section id='portfolioBlock' className={`${styles.portfolioBlock} ${styles.contentBlock}`}>

			</section>
			<section id='contactBlock' className={`${styles.contactBlock} ${styles.contentBlock}`}>

			</section>
			<section id='blogBlock' className={`${styles.blogBlock} ${styles.contentBlock}`}>

			</section>
		</div>
	);
}

export default PageWrapper;
