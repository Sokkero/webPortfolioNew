import React, { Suspense, useContext } from 'react';
import { FormContext } from '../../Store';
import styles from '../../styles/css/wrapper/headerBlockWrapper.scss';
import personImage from '../../styles/images/PersonTestImageTransparent.png';
import NeonButton from '../inputs/NeonButton';


function HeaderBlockWrapper() {
	const [state, dispatch] = useContext(FormContext);
	
	return (
		<div className={styles.headerWrapper}>
			<div className={`${styles.headerText} ${styles.headerTextSmall}`}>
				<h1>Paul Sohns - Portfolio</h1>
			</div>
			<div className={styles.leftText}>
				<div className={`${styles.headerText} ${styles.headerTextNormal}`}>
					<h1>Paul Sohns<br/>Portfolio</h1>
				</div>
				<div className={styles.aboutMeText}>
					<p>
						About me text here Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
						sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
						sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
						Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
					</p>
				</div>
				<div className={styles.buttonWrapper}>
					<NeonButton 
						onClickFunction={() => {
							const elem = document.getElementById('aboutMeBlock');
							if(elem !== null){
								elem.scrollIntoView({
									behavior: "smooth",
									block: "center",
									inline: "center"
								});
							}
						}}
						style='headerButton'
						buttonLabel='Lorem ipsum'
					/>
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
