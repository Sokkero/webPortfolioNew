import React, { Suspense, useContext } from 'react';
import { FormContext } from '../../Store';
import TopBlockWrapper from './TopBlockWrapper';


function PageWrapper() {
	const [state, dispatch] = useContext(FormContext);
	
	return (
		<div>
			<TopBlockWrapper />
		</div>
	);
}

export default PageWrapper;
