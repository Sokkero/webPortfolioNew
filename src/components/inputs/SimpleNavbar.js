import React, { Suspense, useContext } from 'react';
import { FormContext } from '../../Store';
import styles from '../../styles/css/inputs/simpleNavbar.scss';


function HeaderBlockWrapper() {
	const [state, dispatch] = useContext(FormContext);

	function executeScroll(refPoint) {
		refPoint.current.scrollIntoView({ behavior: 'smooth'});
	}
	
	return (
		<div className={styles.navbarWrapper}>
			<div 
				className={styles.navbarPoint} 
				onClick={executeScroll(null)}
			/>
		</div>
	);
}

export default HeaderBlockWrapper;
