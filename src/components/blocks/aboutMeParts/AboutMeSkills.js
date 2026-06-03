import React from 'react';
import styles from '../../../resources/scss/components/blocks/aboutMeParts/aboutMeSkills.module.scss';
import {AboutMeContent} from "../../../resources/content";

function SkillEntry({entry}) {
	return (
		<div className={styles.entry}>
			<span className={styles.skillName}>
				{entry.skillName}
				{entry.hint && (
					<span className={styles.hint} role="tooltip">{entry.hint}</span>
				)}
			</span>
			<span className={styles.skillMeter}>
				<span
					className={styles.skillBar}
					style={{width: entry.percentage}}
				/>
				<span
					className={styles.skillBox}
					style={{right: `calc((100% - ${entry.percentage}) - 23px)`}}
				>{entry.percentage}</span>
			</span>
		</div>
	);
}

function AboutMeSkills() {
	return (
		<div className={styles.mySkills}>
			<h2>{AboutMeContent.mySkillsContent.headline}</h2>

			{AboutMeContent.mySkillsContent.skillEntries.map((entry, index) => (
				<SkillEntry entry={entry} key={index}/>
			))}

			<span className={styles.seperator}/>

			<h2>{AboutMeContent.myLanguagesContent.headline}</h2>

			{AboutMeContent.myLanguagesContent.languageEntries.map((entry, index) => (
				<SkillEntry entry={entry} key={index}/>
			))}
		</div>
	);
}

export default AboutMeSkills;
