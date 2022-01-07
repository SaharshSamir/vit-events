import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AUTH_ERROR, LOAD_USER } from '../Reducers/type';
import styled from 'styled-components';

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
	const [name, setName] = useState('');
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
			const val = resUser as any;
			const val1 = val.organizerProfile;
			setName(val1.name);
			dispatch({
				type: LOAD_USER,
				payload: val1
			});
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
		<Dash>
			<h1>Dashboard</h1>
			{loading ? (
				'Loading...'
			) : (
				<div>
					<div className="logo">
						<div className="logoimg">
							<p>{name.substr(0, 1).toUpperCase()}</p>
						</div>
					</div>
					<div className="details">
						<h2>Email</h2>
						<p>{name}</p>
						<div className="make">
							<h2>You Do not have a profile. Please make one here</h2>
							<Link to="/organizer/addDetail">Add details</Link>
						</div>
					</div>
				</div>
			)}
		</Dash>
	);
};
const Dash = styled.div`
	.logo {
		display: flex;
		justify-content: flex-start;
		position: relative;
	}
	.logoimg {
		background-color: #5c97ca;
		border: 2px solid black;
		border-radius: 50%;
		width: 15rem;
		height: 15rem;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 5rem;
		margin-left: 4rem;
	}
	.logo::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 0.4rem;
		background-color: black;
		top: 80%;
		z-index: -2;
	}

	.details {
		margin-left: 4rem;
		a {
			color: black;
			border-radius: 1rem;
			border: 2px solid black;
			padding: 0.4rem;
			font-size: 1.4rem;
			text-decoration: none;
		}
	}
`;

export default OrganizerDashboard;
