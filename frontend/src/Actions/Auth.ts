import API from '../utils/Api';
import {
	STUDENT_SIGNUP,
	USER_EXISTS,
	AUTH_ERROR,
	LOGIN
} from '../Reducers/type';
import setToken from '../utils/setToken';

import axios from 'axios';
export const loadUser = () => async (dispatch) => {
	setToken(localStorage.getItem('token'));
};
export const studentSignup = (formdata, navigate) => async (dispatch) => {
	try {
		const body = JSON.stringify(formdata);
		const config = {
			headers: {
				'content-type': 'application/json'
			}
		};
		const res = await axios.post('/auth/student/signup', body, config);
		console.log(res.data.token);
		localStorage.setItem('token', res.data.token);
		dispatch({
			type: STUDENT_SIGNUP,
			payload: res.data.token
		});
		navigate('/dashboard/student');
	} catch (error: any) {
		console.log(error);
		if (error?.response?.data?.message) {
			console.log('account exists');
			dispatch({
				type: USER_EXISTS
			});
		} else {
			dispatch({
				type: AUTH_ERROR
			});
		}
	}
};
export const LoginAction = (formdata, navigate) => async (dispatch) => {
	try {
		const body = JSON.stringify(formdata);
		const config = {
			headers: {
				'content-type': 'application/json'
			}
		};
		const res = await axios.post('/auth/student/login', body, config);
		console.log(res.data.token);
		localStorage.setItem('token', res.data.token);
		dispatch({
			type: LOGIN,
			payload: res.data.token
		});
		navigate('/dashboard/student');
	} catch (error: any) {
		console.log(error?.response?.data?.message);
		dispatch({
			type: AUTH_ERROR,
			payload: error?.response?.data?.message
		});
	}
};
