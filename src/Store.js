import React, {createContext, useEffect, useState} from 'react';

export const SizeContext = createContext([window.innerWidth, window.innerHeight]);

const Store = ({ children }) => {
	const [getSize, setSize] = useState([window.innerWidth, window.innerHeight]);

	const updateWidth = () => {
		setSize([window.innerWidth, window.innerHeight]);
	};

	useEffect(() => {
		window.addEventListener("resize", updateWidth);
	}, []);

	return (
		<SizeContext.Provider value={getSize}>
			{children}
		</SizeContext.Provider>
	);
};

export default Store;
