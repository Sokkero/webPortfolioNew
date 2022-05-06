import React, { Suspense, useContext, useRef } from 'react';
import { FormContext } from '../../Store';
import TopBlockWrapper from './HeaderBlockWrapper';
import styles from '../../styles/css/wrapper/pageWrapper.scss';


function PageWrapper() {
	const [state, dispatch] = useContext(FormContext);
	const headerRef = useRef();
	const aboutRef = useRef();
	const projectsRef = useRef();
	const contactRef = useRef();

	// function handleBackClick() {
	// 	headerRef.current.scrollIntoView({ behavior: 'smooth'});
	// }

	return (
		<div className={styles.wrapper}>
			<div ref={headerRef} className={`${styles.blockHeader} ${styles.contentBlock}`}>
				<TopBlockWrapper />
			</div>
			<div ref={aboutRef} className={`${styles.blockAboutMe} ${styles.contentBlock}`}>

			</div>
			<div ref={projectsRef} className={`${styles.blockProjects} ${styles.contentBlock}`}>

			</div>
			<div ref={contactRef} className={`${styles.blockGetInContact} ${styles.contentBlock}`}>

			</div>
		</div>
	);
}

export default PageWrapper;
