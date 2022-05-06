import React, { Suspense, useContext } from 'react';
import { FormContext } from '../../Store';
import styles from '../../styles/css/wrapper/headerBlockWrapper.scss';
import personImage from '../../images/PersonTestImageTransparent.png';


function HeaderBlockWrapper() {
	const [state, dispatch] = useContext(FormContext);
	
	return (
		<div className={styles.headerWrapper}>
			<div className={styles.leftText}>

			</div>
			<div className={styles.rightImage}>
				<img 
					src={personImage}
				/>
			</div>
		</div>
	);
}

export default HeaderBlockWrapper;
