import React from 'react';
import ReactDOM from 'react-dom';
import './resources/scss/variables.scss';
import './resources/scss/global.scss';
import Store from "./Store";
import PageWrapper from "./components/wrapper/pageWrapper";

ReactDOM.render(
	<Store>
		<PageWrapper />
	</Store>,
	document.getElementById('root')
);