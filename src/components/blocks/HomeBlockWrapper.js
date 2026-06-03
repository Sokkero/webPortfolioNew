import React from 'react';
import styles from '../../resources/scss/components/blocks/homeBlockWrapper.module.scss';
import {ButtonA, ButtonTypes} from "../parts/buttons";
import {HomeBlockContent} from "../../resources/content";

function HomeBlockWrapper() {
	return (
		<section id='homeBlock' style={{backgroundImage: `url(${HomeBlockContent.backgroundImgSrc})`}} className={`${styles.homeWrapper} contentBlock`}>
			<div className={styles.contentTable}>
				<div className={styles.content}>
					<div className={styles.textWrapper}>
						<h3>{HomeBlockContent.smallHeader}</h3>
						<h1>{HomeBlockContent.bigHeader}</h1>
						<p>{HomeBlockContent.text}</p>
					</div>
					<div className={styles.ctaWrapper}>
						<ButtonA
							href={HomeBlockContent.moreAboutMeBtnTarget}
							text={HomeBlockContent.moreAboutMeBtn}
							buttonType={ButtonTypes.LightButton}
							extraStyle={styles.aboutMeExtraStyle}
							isNavigator={true}
						/>
						<ButtonA
							href={HomeBlockContent.portfolioBtnTarget}
							text={HomeBlockContent.portfolioBtn}
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
