import React, { Suspense } from 'react';
import './App.css';
import {useState} from 'react';

const TestComponent = React.lazy(() => import('./testComp'));

function App() {
	const [test, setTest] = useState(false);

	return (
		<div className='App'>
			<header className='App-header'>
				<p>
					My new project.
				</p>
				<button onClick={() => setTest(!test)}>test</button>
				{test && (
					<Suspense fallback={<div>Loading...</div>}>
						<TestComponent />
					</Suspense>
				)}
			</header>
		</div>
	);
}

export default App;
