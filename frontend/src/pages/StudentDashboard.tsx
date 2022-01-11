import React, { useEffect } from 'react';
import { useStudentAuth } from '../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKMARK_SUCCESS, LOAD_USER } from '../Reducers/type';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SingleEvent from '../components/SingleEvent';
import { getbookmark } from '../Actions/Events';

const StudentDashboard: React.FC = () => {
	const { user, loading, error } = useStudentAuth();
	console.log(user?.user);
	const dispatch = useDispatch();
	dispatch({
		type: BOOKMARK_SUCCESS,
		payload: user?.user?.watchList
	});
	const colors = ['#d1efff', '#fffdd1', '#ffd4d1', '#d1ffdb'];
	const watchList = useSelector((store: any) => store.EventReducer.bookMark);
	dispatch({
		type: LOAD_USER,
		payload: user?.user
	});

	return (
		<DashBoard>
			<h1 className="dash">Student Dashboard</h1>
			<div className="left">
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
			<div className="right">
				{watchList?.length === 0 ? (
					<h2>You have no bookMarks</h2>
				) : (
					<div>
						<h2 className="book">My bookmarked events</h2>
						{watchList?.map((event, i) => (
							<SingleEvent
								name={event.eventName}
								date={event.eventDate}
								registration={event.eventDate}
								fromAll={false}
								fromDashBoard={true}
								desc={event.eventDesc}
								id={event._id}
								color={colors[i % colors.length]}
							/>
						))}
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
	.right {
		.book {
			text-align: center;
		}
	}
`;

export default StudentDashboard;
