import React, {useContext} from 'react';
import styles from '../../resources/scss/components/pageWrapper.scss';
import NormalNav from "../inputs/normalNav";
import MobileNav from "../inputs/mobileNav";
import HomeBlockWrapper from '../blocks/HomeBlockWrapper';
import AboutMeBlockWrapper from "../blocks/AboutMeBlockWrapper";
import {SizeContext} from "../../Store";

function PageWrapper() {
	const width = useContext(SizeContext)[0];
	const height = useContext(SizeContext)[1];

	return (
		<div className={styles.wrapper}>
			{width < 700 && width < height ? <MobileNav /> : <NormalNav />}
			<HomeBlockWrapper/>
			<span className={styles.seperator}/>
			<AboutMeBlockWrapper />
			<span className={styles.seperator}/>
			<section id='portfolioBlock' className={`${styles.portfolioBlock} ${styles.contentBlock} contentBlock`} />
			<span className={styles.seperator}/>
			<section id='contactBlock' className={`${styles.contactBlock} ${styles.contentBlock} contentBlock`} />
			<span className={styles.seperator}/>
			<section id='blogBlock' className={`${styles.blogBlock} ${styles.contentBlock} contentBlock`} />
		</div>
	);
}

export default PageWrapper;
