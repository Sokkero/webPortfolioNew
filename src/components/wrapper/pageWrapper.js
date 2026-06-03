import React, {useContext} from 'react';
import styles from '../../resources/scss/components/pageWrapper.module.scss';
import NormalNav from "../parts/normalNav";
import MobileNav from "../parts/mobileNav";
import HomeBlockWrapper from '../blocks/HomeBlockWrapper';
import AboutMeBlockWrapper from "../blocks/AboutMeBlockWrapper";
import ContactMeBlockWrapper from "../blocks/ContactMeBlockWrapper";
import PortfolioBlockWrapper from "../blocks/PortfolioBlockWrapper";
import {SizeContext} from "../../Store";

function PageWrapper() {
	const width = useContext(SizeContext)[0];
	const height = useContext(SizeContext)[1];

	return (
		<div className={styles.wrapper}>
			{width <= 700 && width < height ? <MobileNav /> : <NormalNav />}
			<HomeBlockWrapper/>
			<span className={styles.seperator}/>
			<AboutMeBlockWrapper />
			<span className={styles.seperator}/>
			<PortfolioBlockWrapper />
			<span className={styles.seperator}/>
			<ContactMeBlockWrapper/>
		</div>
	);
}

export default PageWrapper;
