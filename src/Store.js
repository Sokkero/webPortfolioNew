import React, {createContext, useEffect, useState} from 'react';

export const WidthContext = createContext(window.innerWidth);

const Store = ({ children }) => {
	const [getWidth, setWidth] = useState(window.innerWidth);

	const updateWidth = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", updateWidth);
	}, []);

	return (
		<WidthContext.Provider value={getWidth}>
			{children}
		</WidthContext.Provider>
	);
};

export default Store;
