import React from 'react';
import './App.css';
import {useState} from 'react';
import TestComponent from './testComp';

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
					<TestComponent />
				)}
			</header>
		</div>
	);
}

export default App;
