import React from 'react';
import styles from '../../resources/scss/components/blocks/homeBlockWrapper.scss';
import bgImage from "../../resources/images/fullscreendarkFlipped.jpg"
import ButtonA, {ButtonTypes} from "../inputs/buttonA";

function HomeBlockWrapper() {
	return (
		<section id='homeBlock' style={{backgroundImage: `url(${bgImage})`}} className={`${styles.homeWrapper} contentBlock`}>
			<div className={styles.contentTable}>
				<div className={styles.content}>
					<div className={styles.textWrapper}>
						<h3>Greetings!</h3>
						<h1>Nunquam imitari castor.</h1>
						<p>A falsis, xiphias domesticus pulchritudine. A falsis, xiphias domesticus pulchritudine. A falsis, xiphias domesticus pulchritudine.</p>
					</div>
					<div className={styles.ctaWrapper}>
						<ButtonA
							href={'#aboutMeBlock'}
							text={"&#xf007; More about me"}
							buttonType={ButtonTypes.LightButton}
							extraStyle={styles.aboutMeExtraStyle}
							isNavigator={true}
						/>
						<ButtonA
							href={'#portfolioBlock'}
							text={"&#xf0b1; Portfolio"}
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
