import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../Actions/Events';
import { useDispatch, useSelector } from 'react-redux';
import SingleEvent from '../components/SingleEvent';
import styled from 'styled-components';
import { getAuth, useStudentAuth } from '../hooks/useAuth';
import { LOAD_USER } from '../Reducers/type';
import setToken from '../utils/setToken';
const AllPost = () => {
	const [state, setState] = useState(0);
	const allEvents = useSelector((store: any) => store.EventReducer.allEvents);
	const dispatch = useDispatch();
	const { user, loading, error } = useStudentAuth();
	const cookie = document.cookie;
	const isOrgAuth = cookie?.split(' ')[1]?.split('=')[1];
	console.log(user?.user);
	if (user?.user && localStorage.getItem('token')) {
		setToken(localStorage.getItem('token'));
		dispatch({
			type: LOAD_USER,
			payload: user?.user
		});
	} else if (isOrgAuth) {
		const getData = async () => {
			const {
				user: resUser,
				loading: resLoading,
				error: resError
			} = await getAuth();

			const val = resUser as any;
			const val1 = val.organizerProfile;
			dispatch({
				type: LOAD_USER,
				payload: val1
			});
			localStorage.removeItem('token');
		};

		getData();
	}
	useEffect(() => {
		dispatch(getAllEvents(state));
	}, [state]);
	const colors = ['#d1efff', '#fffdd1', '#ffd4d1', '#d1ffdb'];

	return (
		<AllEvents>
			<h1 style={{ textAlign: 'center' }}>Upcoming Events</h1>

			{allEvents.length === 0 ? (
				<p style={{ textAlign: 'center' }}>Loading....</p>
			) : (
				allEvents.map((event, i) => {
					return (
						<SingleEvent
							name={event.title}
							desc={event.description}
							date={event.date}
							registration={event.registration}
							color={colors[i % colors.length]}
							id={event._id}
							fromAll={true}
							fromDashBoard={false}
						/>
					);
				})
			)}
			<div className="action">
				<button
					onClick={() => {
						setState(state + 1);
					}}>
					Load more..
				</button>
			</div>
			<br />
			<br />
		</AllEvents>
	);
};
const AllEvents = styled.div`
	.action {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	button {
		color: black;
		border-radius: 1rem;
		border: 2px solid black;
		padding: 0.4rem;
		font-size: 1.4rem;
		cursor: pointer;
	}
`;
export default AllPost;
