import { ALLPOST_SUCCESS, CLUB_EVENT_SUCCESS, POST_SUCCESS } from './type';
const initailState = {
	allEvents: [],
	clubEvents: []
};
export const EventReducer = (state = initailState, action) => {
	switch (action.type) {
		case POST_SUCCESS:
			return { ...state };
		case ALLPOST_SUCCESS:
			return { ...state, allEvents: state.allEvents.concat(action.payload) };
		case CLUB_EVENT_SUCCESS:
			return { ...state, clubEvents: action.payload };
		default:
			return state;
	}
};
