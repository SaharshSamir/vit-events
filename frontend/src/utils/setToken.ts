import API from './Api';

// const setToken = (token, axios) => {
// 	if (token) {
// 		axios.defaults.headers.common['Authorization'] = `BEARER ${token}`;
// 	} else {
// 		delete axios.defaults.headers.common['Authorization'];
// 	}
// };

const setToken = (token) => {
	if (token) {
		API.defaults.headers.common['Authorization'] = `BEARER ${token}`;
	} else {
		delete API.defaults.headers.common['Authorization'];
	}
};
export default setToken;
