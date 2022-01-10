import { POST_SUCCESS } from './type';
import { ALLPOST_SUCCESS } from './type';
const initailState = {
	allEvents: []
};
export const EventReducer = (state = initailState, action) => {
	switch (action.type) {
		case POST_SUCCESS:
			return { ...state };
		case ALLPOST_SUCCESS:
			return { ...state, allEvents: state.allEvents.concat(action.payload) };
		default:
			return state;
	}
};
