import useSWR from 'swr';
import setToken from '../utils/setToken';
// import API from '../utils/Api';
import axios from 'axios';

interface Data {
	data: Object | undefined;
	error: Object | undefined;
}

async function fetcher(route) {
	// return axios
	// 	.get(route)
	// 	.then((res) => res.data.ok && res.data.json())
	// 	.then((user) => user || null);
	const res = await axios.get(route, {
		headers: {
			'Access-Control-Allow-Origin': 'http://localhost:3000'
		}
	});
	console.log('just outside if');
	console.log(res.data.data);
	console.log(res.data.ok);
	if (!res.data.ok) {
		console.log('inside if');
		const err = new Error(res.data.error.message);
		err.message = res.data;
		// return { user, err };
		throw err;
	}
	return res.data;
}

const fetchData = async () => {
	const res = await axios.get('/profile/organizer');
	console.log(res);
	let response: Data = { data: {}, error: {} };
	if (!res.data.ok) {
		response.error = { err: res.data.error };
		return response;
	}
	response.data = res.data;
	console.log(res);
	return response;
};

export async function getAuth() {
	// const { data, error } = useSWR('/profile/organizer', fetcher, {
	// 	onErrorRetry: () => {
	// 		return;
	// 	}
	// });
	// console.log(data);
	// console.log(error);
	// const user = data;
	// console.log(`error return from useSwr = ${JSON.stringify(error)}`);
	// const loading = user === undefined;
	let { data, error } = await fetchData();
	// data = Promise.resolve(data);
	console.log(data);

	return {
		user: data,
		loading: data === undefined || error === undefined,
		error
	};
}

export function useStudentAuth() {
	console.log(localStorage.getItem('token'));
	setToken(localStorage.getItem('token'));
	const { data: user, error } = useSWR('/profile/student', fetcher);
	const loading = user === undefined;

	return {
		user,
		loading,
		error
	};
}
