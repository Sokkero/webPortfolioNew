import React from 'react';
import styles from '../../resources/scss/components/homeBlockWrapper.scss';

function HomeBlockWrapper() {
	return (
		<section id='homeBlock' className={`${styles.headerWrapper} contentBlock`}>
			<div className={styles.contentTable}>
				<div className={styles.content}>
					<div className={styles.textWrapper}>
						<h3>Greetings!</h3>
						<h1>Nunquam imitari castor.</h1>
						<p>A falsis, xiphias domesticus pulchritudine. A falsis, xiphias domesticus pulchritudine. A falsis, xiphias domesticus pulchritudine.</p>
					</div>
					<div className={styles.ctaWrapper}>
						<a href='#aboutMeBlock' className={styles.aboutMeLink}>
							<span>More about me</span>
						</a>
						<a href='#portfolioBlock' className={styles.portfolioLink}>
							<span>My portfolio</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeBlockWrapper;
