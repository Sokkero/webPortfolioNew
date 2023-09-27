import React from 'react';
import styles from '../../resources/scss/components/blocks/homeBlockWrapper.scss';
import bgImage from "../../resources/images/fullscreendarkFlipped.jpg"
import ButtonA, {ButtonTypes} from "../inputs/buttonA";
import {HomeBlockTexts} from "../../resources/texts";

function HomeBlockWrapper() {
	return (
		<section id='homeBlock' style={{backgroundImage: `url(${bgImage})`}} className={`${styles.homeWrapper} contentBlock`}>
			<div className={styles.contentTable}>
				<div className={styles.content}>
					<div className={styles.textWrapper}>
						<h3>{HomeBlockTexts.smallHeader}</h3>
						<h1>{HomeBlockTexts.bigHeader}</h1>
						<p>{HomeBlockTexts.text}</p>
					</div>
					<div className={styles.ctaWrapper}>
						<ButtonA
							href={'#aboutMeBlock'}
							text={HomeBlockTexts.moreAboutMeBtn}
							buttonType={ButtonTypes.LightButton}
							extraStyle={styles.aboutMeExtraStyle}
							isNavigator={true}
						/>
						<ButtonA
							href={'#portfolioBlock'}
							text={HomeBlockTexts.portfolioBtn}
							buttonType={ButtonTypes.DarkButton}
							isNavigator={true}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeBlockWrapper;
