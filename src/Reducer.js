import { PAGE_TYPES } from './Store';

const Reducer = (state, action) => {
	switch (action.type) {
	case 'SET_XYZ':
		return {
			...state,
			currentSite: PAGE_TYPES.INDEX,
		};
	default:
		return state;
	}
};

export default Reducer;
