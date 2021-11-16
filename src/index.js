import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './Store';
import './global.scss';

ReactDOM.render(
	<Store>
		<App />
	</Store>,
	document.getElementById('root')
);