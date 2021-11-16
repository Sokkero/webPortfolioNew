import React, {createContext, useReducer} from 'react';
import PropTypes from 'prop-types';
import Reducer from './Reducer';

export const PAGE_TYPES = {
	INDEX: 'index',
	TEST01: 'test01',
	TEST02: 'test02',
};

const initialState = {
	currentSite: 'index',
};

export const FormContext = createContext(initialState);

const Store = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return (
		<FormContext.Provider value={[state, dispatch]}>
			{children}
		</FormContext.Provider>
	);
};

Store.propTypes = {
	children: PropTypes.element.isRequired,
};

export default Store;
