import useSwr from 'swr';

function fetcher(route) {
	return fetch(route)
		.then((res) => res.ok && res.json())
		.then((user) => user || null);
}

export default function useAuth() {
	const { data: user, error } = useSwr('/auth/organization', fetcher);
	const loading = user === undefined;

	return {
		user,
		loading,
		error
	};
}
