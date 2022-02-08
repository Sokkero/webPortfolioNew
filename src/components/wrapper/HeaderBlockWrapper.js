import React, { Suspense, useContext } from 'react';
import { FormContext } from '../../Store';
import styles from '../../styles/css/wrapper/headerBlockWrapper.scss';


function HeaderBlockWrapper() {
	const [state, dispatch] = useContext(FormContext);
	
	return (
		<div className={styles.headerWrapper}>
		</div>
	);
}

export default HeaderBlockWrapper;
