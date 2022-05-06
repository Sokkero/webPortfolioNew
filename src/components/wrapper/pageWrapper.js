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
		<div>
			<div>
				<div ref={headerRef} className={styles.blockHeader}>
					<TopBlockWrapper />
				</div>
				<div ref={aboutRef} className={styles.blockAboutMe}>

				</div>
				<div ref={projectsRef} className={styles.blockProjects}>

				</div>
				<div ref={contactRef} className={styles.blockGetInContact}>

				</div>
			</div>
		</div>
	);
}

export default PageWrapper;
