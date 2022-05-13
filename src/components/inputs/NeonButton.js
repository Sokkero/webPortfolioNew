import React, { Suspense, useContext } from 'react';
import propTypes from 'prop-types';
import { FormContext } from '../../Store';
import styles from '../../styles/css/inputs/neonButton.scss';


function NeonButton({ onClickFunction, style, buttonLabel }) {

	return (
		<button
			className={styles[style]}
			onClick={onClickFunction}
		>
			{buttonLabel}
		</button>
	);
}

export default NeonButton;

NeonButton.propTypes = {
	onClickFunction: propTypes.func.isRequired,
	style: propTypes.string.isRequired,
	buttonLabel: propTypes.string.isRequired,
};
