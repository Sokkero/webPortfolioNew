import React, { Suspense, useContext } from 'react';
import { FormContext } from '../../Store';
import styles from '../../styles/css/wrapper/headerBlockWrapper.scss';
import personImage from '../../styles/images/PersonTestImageTransparent.png';


function HeaderBlockWrapper() {
	const [state, dispatch] = useContext(FormContext);
	
	return (
		<div className={styles.headerWrapper}>
			<div className={styles.leftText}>
				<div className={styles.headerText}>
					<h1>Site header here</h1>
				</div>
				<div className={styles.aboutMeText}>
					<p>About me text here Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
				</div>
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
