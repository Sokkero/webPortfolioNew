import { PAGE_TYPES } from './Store';

const Reducer = (state, action) => {
	switch (action.type) {
	case 'SET_PAGE_TO_INDEX':
		return {
			...state,
			currentSite: PAGE_TYPES.INDEX,
		};
	case 'SET_PAGE_TO_TEST01':
		return {
			...state,
			currentSite: PAGE_TYPES.TEST01,
		};
	case 'SET_PAGE_TO_TEST02':
		return {
			...state,
			currentSite: PAGE_TYPES.TEST02,
		};
	default:
		return state;
	}
};

export default Reducer;
