import React, { Suspense, useContext } from 'react';
import { FormContext } from '../../Store';
import TopBlockWrapper from './HeaderBlockWrapper';
import styles from '../../styles/css/wrapper/pageWrapper.scss';


function PageWrapper() {
	const [state, dispatch] = useContext(FormContext);
	
	return (
		<div>
			<div>
				<div className={styles.blockHeader}>
					<TopBlockWrapper />
				</div>
				<div className={styles.blockAboutMe}>

				</div>
				<div className={styles.blockProjects}>

				</div>
				<div className={styles.blockGetInContact}>

				</div>
			</div>
		</div>
	);
}

export default PageWrapper;
