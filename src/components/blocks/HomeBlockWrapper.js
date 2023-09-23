import React from 'react';
import styles from '../../resources/scss/homeBlockWrapper.scss';

function HomeBlockWrapper() {
	return (
		<section className={styles.headerWrapper}>
			<div className={styles.contentTable}>
				<div className={styles.content}>
					<div className={styles.textWrapper}>
						<h3 className={styles.h3}>Greetings!</h3>
						<h1 className={styles.h1}>Nunquam imitari castor.</h1>
						<p className={styles.p}>A falsis, xiphias domesticus pulchritudine. A falsis, xiphias domesticus pulchritudine. A falsis, xiphias domesticus pulchritudine.</p>
					</div>
					<div className={styles.ctaWrapper}>
						<a href='#home' className={`${styles.link} ${styles.aboutMeLink}`}>
							<span className={styles.linkText}> More about me</span>
						</a>
						<a href='#home' className={`${styles.link} ${styles.portfolioLink}`}>
							<span className={styles.linkText}> My portfolio</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeBlockWrapper;
