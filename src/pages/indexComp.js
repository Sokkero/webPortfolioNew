import React, { useContext } from 'react';
import { FormContext } from '../Store';
import styles from './test.scss';

function testComp() {
	const [state, dispatch] = useContext(FormContext);

	return (
		<div>
			<p className='test'>This is the index</p>
			<button
				onClick={() => dispatch({ type: 'SET_PAGE_TO_TEST01' })}
				value='Test Page 01'
			>
				Switch to test site 01
			</button>
		</div>
	);
}

export default testComp;
