import React from 'react';
import styles from '../../resources/scss/components/blocks/aboutMeBlockWrapper.scss';
import meImg from '../../resources/images/darkAbout.jpg'
import ButtonA, {ButtonTypes} from "../inputs/buttonA";

function AboutMeBlockWrapper() {
	return (
		<section id='aboutMeBlock' className={`${styles.aboutMeWrapper} contentBlock`}>
			<div className={styles.contentWrapper}>
				<div className={styles.header}>
					<h2>About <span>me</span></h2>
					<span>Est secundus detrius, cesaris. Est secundus detrius, cesaris.</span>
				</div>
				{/*TODO: find a better way for all of this*/ }
				<div className={styles.myInfo}>
					<div className={styles.imageContainer}>
						<img src={meImg} alt={'A picture of me'} />
					</div>
					<div className={styles.myInfoWrapper}>
						<div className={styles.myInfoColumn}>
							<ul>
								<li>
									<h5>
										<span>Something</span>
										else
									</h5>
								</li>
								<li>
									<h5>
										<span>Something</span>
										else
									</h5>
								</li>
								<li>
									<h5>
										<span>Something</span>
										else
									</h5>
								</li>
								<li>
									<h5>
										<span>Something</span>
										else
									</h5>
								</li>
								<li>
									<h5>
										<span>Something</span>
										else
									</h5>
								</li>
							</ul>
						</div>
						<div className={styles.myInfoColumn}>
							<ul>
								<li>
									<h5>
										<span>Something</span>
										else
									</h5>
								</li>
								<li>
									<h5>
										<span>Something</span>
										else
									</h5>
								</li>
								<li>
									<h5>
										<span>Something</span>
										else
									</h5>
								</li>
								<li>
									<h5>
										<span>Something</span>
										else
									</h5>
								</li>
								<li>
									<h5>
										<span>Something</span>
										else
									</h5>
								</li>
							</ul>
						</div>
						<div className={styles.myInfoBottom}>
							{/*TODO: make a buttons a class*/ }
							<ButtonA
								href={'https://www.google.com/'}
								text={"&#xf007; Download my CV"}
								buttonType={ButtonTypes.DarkButton}
								isNavigator={false}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMeBlockWrapper;
