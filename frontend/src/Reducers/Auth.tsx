import {
	AUTH_ERROR,
	STUDENT_SIGNUP,
	USER_EXISTS,
	LOGIN,
	LOAD_USER
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
				user: action.payload.organizerProfile,
				isAuthenticated: true,
				isLoading: false,
				alreadyExists: false,
				message: ''
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
		default:
			return initialState;
	}
};
