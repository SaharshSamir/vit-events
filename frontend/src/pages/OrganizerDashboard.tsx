import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AUTH_ERROR, LOAD_USER } from '../Reducers/type';
interface errorObj {
	name?: string;
	message?: string;
	expiredA?: string;
	err?: any;
}

const OrganizerDashboard = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({} as errorObj);
	const dispatch = useDispatch();

	useEffect(() => {
		async function getData() {
			const {
				user: resUser,
				loading: resLoading,
				error: resError
			} = await getAuth();

			// console.log(resUser);
			// console.log(resLoading);
			// console.log(resError);

			dispatch({
				type: LOAD_USER,
				payload: resUser
			});
			console.log(resUser);
			setUser(resUser as any);
			setLoading(resLoading);
			setError(resError as any);
		}
		getData();
	}, []);
	if (error?.err?.message) {
		console.log('hey');
		navigate('/');
	}
	console.log(user);
	return (
		<React.Fragment>
			<h1>Dashboard</h1>
			{loading ? 'Loading...' : `${JSON.stringify(user || error)}`}
		</React.Fragment>
	);
};

export default OrganizerDashboard;
