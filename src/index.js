import React from 'react';
import ReactDOM from 'react-dom';
import PageWrapper from './components/wrapper/PageWrapper';
import Store from './Store';
import '../src/styles/css/global.scss';

ReactDOM.render(
	<Store>
		<PageWrapper />
	</Store>,
	document.getElementById('root')
);