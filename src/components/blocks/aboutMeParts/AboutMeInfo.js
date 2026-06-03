import React from 'react';
import styles from '../../../resources/scss/components/blocks/aboutMeParts/aboutMeInfo.module.scss';
import {ButtonA, ButtonTypes} from "../../parts/buttons";
import {AboutMeContent} from "../../../resources/content";

function AboutMeInfo() {
	return (
		<div className={styles.myInfo}>
			<div className={styles.imageContainer}>
				<img src={AboutMeContent.myInfoContent.imageSrc} alt={AboutMeContent.myInfoContent.imageAlt} />
			</div>
			<div className={styles.myInfoWrapper}>
				<div className={styles.myInfoColumn}>
					<ul>
						{AboutMeContent.myInfoContent.leftColumnEntries.map((entry, index) => (
							<li key={index}>
								<h5>
									<span>{entry.firstPart}</span><br/>
									{entry.lastPart}
								</h5>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.myInfoColumn}>
					<ul>
						{AboutMeContent.myInfoContent.rightColumnEntries.map((entry, index) => (
							<li key={index}>
								<h5>
									<span>{entry.firstPart}</span><br/>
									{entry.lastPart}
								</h5>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.myInfoBottom}>
					<ButtonA
						href={AboutMeContent.myInfoContent.cvBtnTarget}
						text={AboutMeContent.myInfoContent.cvBtnText}
						buttonType={ButtonTypes.DarkButton}
						isNavigator={false}
					/>
				</div>
			</div>
		</div>
	);
}

export default AboutMeInfo;
