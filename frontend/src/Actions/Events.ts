import { POST_SUCCESS } from '../Reducers/type';
import axios from 'axios';
const postEvent = (formData, navigate) => async (dispatch) => {
	const body = JSON.stringify(formData);
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	};
	try {
		const res = await axios.post('/event/create', body, config);
		console.log(res);
		dispatch({
			type: POST_SUCCESS
		});
		navigate('/dashboard/organizer');
	} catch (e) {
		console.log(e);
	}
};
export default postEvent;
