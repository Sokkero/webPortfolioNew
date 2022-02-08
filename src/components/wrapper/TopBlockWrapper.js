import React, { Suspense, useContext } from 'react';
import { FormContext } from '../../Store';
import styles from '../../styles/css/wrapper/topBlockWrapper.css';


function TopBlockWrapper() {
	const [state, dispatch] = useContext(FormContext);
	
	return (
		<div className={styles.wrapper}>
			<div className={styles.test1} />
			<div className={styles.test2} />
		</div>
	);
}

export default TopBlockWrapper;
