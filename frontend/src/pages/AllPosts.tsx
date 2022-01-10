import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../Actions/Events';
import { useDispatch, useSelector } from 'react-redux';
import SingleEvent from '../components/SingleEvent';
import styled from 'styled-components';
import { getAuth } from '../hooks/useAuth';
import { LOAD_USER } from '../Reducers/type';
const AllPost = () => {
	const [state, setState] = useState(0);
	const allEvents = useSelector((store: any) => store.EventReducer.allEvents);
	const dispatch = useDispatch();
	useEffect(() => {
		async function getData() {
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
		}
		getData();
		dispatch(getAllEvents(state));
	}, [state]);
	const colors = ['#d1efff', '#fffdd1', '#ffd4d1', '#d1ffdb'];

	return (
		<AllEvents>
			<h1 style={{ textAlign: 'center' }}>Upcoming Events</h1>

			{allEvents.length === 0 ? (
				<p style={{ textAlign: 'center' }}>Loading....</p>
			) : (
				allEvents.map((event, i) => (
					<SingleEvent
						name={event.title}
						desc={event.description}
						date={event.date}
						registration={event.registration}
						color={colors[i % colors.length]}
					/>
				))
			)}
			<div className="action">
				<button
					onClick={() => {
						setState(state + 1);
					}}>
					Load more..
				</button>
			</div>
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
	}
`;
export default AllPost;
