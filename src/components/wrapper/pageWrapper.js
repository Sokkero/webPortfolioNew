import React, { Suspense, useContext, useRef } from 'react';
import { FormContext } from '../../Store';
import TopBlockWrapper from './HeaderBlockWrapper';
import styles from '../../styles/css/wrapper/pageWrapper.scss';


function PageWrapper() {
	const [state, dispatch] = useContext(FormContext);

	return (
		<div className={styles.wrapper}>
			<div id='headerBlock' className={`${styles.blockHeader} ${styles.contentBlock}`}>
				<TopBlockWrapper />
			</div>
			<div id='aboutMeBlock' className={`${styles.blockAboutMe} ${styles.contentBlock}`}>

			</div>
			<div id='projectsBlock' className={`${styles.blockProjects} ${styles.contentBlock}`}>

			</div>
			<div id='contactBlock' className={`${styles.blockGetInContact} ${styles.contentBlock}`}>

			</div>
		</div>
	);
}

export default PageWrapper;
