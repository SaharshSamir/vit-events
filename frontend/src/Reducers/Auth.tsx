import {
	AUTH_ERROR,
	STUDENT_SIGNUP,
	USER_EXISTS,
	LOGIN,
	LOAD_USER,
	UPDATE_ORGANIZER,
	LOGOUT
} from './type';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	isLoading: true,
	user: null,
	alreadyExists: false,
	message: ''
};

export const Auth = (state = initialState, action) => {
	switch (action.type) {
		case STUDENT_SIGNUP:
		case LOGIN:
			return {
				...state,
				token: action.payload,
				isAuthenticated: true,
				isLoading: false,
				alreadyExists: false,
				message: ''
			};
		case LOAD_USER:
			return {
				...state,
				token: localStorage.getItem('token'),
				user: action.payload,
				isAuthenticated: true,
				isLoading: false,
				alreadyExists: false,
				message: ''
			};
		case UPDATE_ORGANIZER:
			return {
				...state
			};
		case USER_EXISTS:
			return {
				...state,
				isLoading: false,
				alreadyExists: true
			};

		case AUTH_ERROR:
			localStorage.removeItem('token');
			return {
				...state,
				isLoading: false,
				user: null,
				token: null,
				isAuthenticated: false,
				alreadyExists: false,
				message: action.payload
			};
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isLoading: false,
				user: null,
				isAuthenticated: false,
				alreadyExists: false
			};
		default:
			return state;
	}
};
