import React, { Suspense, useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Store';


function App() {
	const Index = React.lazy(() => import('./pages/indexComp'));
	const Site01 = React.lazy(() => import('./pages/testContent01'));
	const Site02 = React.lazy(() => import('./pages/testContent02'));
	
	const [state, dispatch] = useContext(FormContext);
	
	return (
		<div className='mainDiv'>
			<p>
					My new project.
			</p>
			<br /><br /><br /><br />
			{state.currentSite === 'index' && (
				<Suspense fallback={<div>Loading...</div>}>
					<Index />
				</Suspense>
			)}
			{state.currentSite === 'test01' && (
				<Suspense fallback={<div>Loading...</div>}>
					<Site01 />
				</Suspense>
			)}
			{state.currentSite === 'test02' && (
				<Suspense fallback={<div>Loading...</div>}>
					<Site02 />
				</Suspense>
			)}
		</div>
	);
}

export default App;
