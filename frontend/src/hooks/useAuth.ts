import useSwr from 'swr';
import setToken from '../utils/setToken';
import API from '../utils/Api';
import axios from 'axios';

async function fetcher(route) {
	// return axios
	// 	.get(route)
	// 	.then((res) => res.data.ok && res.data.json())
	// 	.then((user) => user || null);
	let globalError;
	try {
		const res = await axios.get(route, {
			headers: {
				'Access-Control-Allow-Origin': 'http://localhost:3000'
			}
		});
		console.log(res);
		if (!res.data.ok || res.status > 299 || res.status < 200) {
			const err = new Error('An error occured while fetching the data');
			err.message = await res.data;
			console.log('got an error in fetcher');
			console.log(JSON.stringify(err));
			globalError = err;
		}
		const user = await res.data;
		return user;
	} catch (error) {
		console.log(error);
		globalError = error;
	}
	if (globalError) {
		throw globalError;
	}
}

export function useAuth() {
	const { data: user, error } = useSwr('/profile/organizer', fetcher);
	console.log(`error return from useSwr = ${JSON.stringify(error)}`);
	const loading = user === undefined;

	return {
		user,
		loading,
		error
	};
}

export function useStudentAuth() {
	console.log(localStorage.getItem('token'));
	setToken(localStorage.getItem('token'));
	const { data: user, error } = useSwr('/profile/student', fetcher);
	const loading = user === undefined;

	return {
		user,
		loading,
		error
	};
}
