import axios from 'axios';
import { UPDATE_ERROR, UPDATE_ORGANIZER } from '../Reducers/type';

const updateOrganizer = (formData, navigate) => async (dispatch) => {
	const body = JSON.stringify(formData);
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	};
	try {
		const res = await axios.put('/profile/update', body, config);
		console.log(res);
		dispatch({
			type: UPDATE_ORGANIZER
		});
		navigate('/dashboard/organizer');
	} catch (e) {
		console.log(e);
		dispatch({
			type: UPDATE_ERROR
		});
	}
};
export default updateOrganizer;
