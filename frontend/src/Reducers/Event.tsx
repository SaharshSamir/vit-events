import { POST_SUCCESS } from './type';
const initailState = {};
export const EventReducer = (state = initailState, action) => {
	switch (action.type) {
		case POST_SUCCESS:
			return { ...state };
	}
};
