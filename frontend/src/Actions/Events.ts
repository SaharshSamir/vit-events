import { POST_SUCCESS } from '../Reducers/type';
import axios from 'axios';
import { ALLPOST_SUCCESS, CLUB_EVENT_SUCCESS } from '../Reducers/type';
const postEvent = (formData, navigate) => async (dispatch) => {
	const body = JSON.stringify(formData);
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	};
	try {
		const res = await axios.post('/event/create', body, config);
		dispatch({
			type: POST_SUCCESS
		});
		navigate('/dashboard/organizer');
	} catch (e) {
		console.log(e);
	}
};
export const getAllEvents = (reqCount) => async (dispatch) => {
	try {
		const body = JSON.stringify(reqCount);
		const res = await axios.get(`/event/all/${reqCount}`);
		dispatch({
			type: ALLPOST_SUCCESS,
			payload: res.data.allEvents
		});
	} catch (e) {
		console.log(e);
	}
};
export const getOrganizerEvents = (club) => async (dispatch) => {
	try {
		const res = await axios.get(`/event/${club}`);
		console.log(res);
		dispatch({
			type: CLUB_EVENT_SUCCESS,
			payload: res.data.clubEvents
		});
	} catch (e) {
		console.log(e);
	}
};
export default postEvent;
