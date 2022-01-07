import React from 'react';
import { useStudentAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { LOAD_USER } from '../Reducers/type';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StudentDashboard: React.FC = () => {
	const { user, loading, error } = useStudentAuth();
	console.log(user?.user);
	const dispatch = useDispatch();
	dispatch({
		type: LOAD_USER,
		payload: user?.user
	});
	return (
		<DashBoard>
			<h1 className="dash">Student Dashboard</h1>
			<div>
				{loading ? (
					<p className="loading">Loading...</p>
				) : (
					<div className="main">
						<h2 className="name">Name: </h2>
						<p>{user.user.name}</p>
						<h2>Email: </h2>
						<p>{user.user.email}</p>
						<div className="browse">
							<Link to="/">Browse Events</Link>
						</div>
					</div>
				)}
			</div>
		</DashBoard>
	);
};

const DashBoard = styled.div`
	.dash,
	.loading {
		text-align: center;
	}
	.main {
		margin: 4rem;
		.browse {
			margin-top: 2rem;
		}
		a {
			text-decoration: none;
			color: white;
			background-color: black;
			padding: 0.8rem;
			font-size: 1rem;
			border-radius: 1rem;
		}
	}
`;

export default StudentDashboard;
