import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Details } from '../pages/OrganizerDetails';
import postEvent from '../Actions/Events';
import { useNavigate } from 'react-router';
import { getAuth } from '../hooks/useAuth';
import { LOAD_USER } from '../Reducers/type';

const EventForm = () => {
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
	}, []);
	const [data, setData] = useState({
		title: '',
		description: '',
		date: ''
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onChangeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(data);
		dispatch(postEvent(data, navigate));
	};
	return (
		<Details>
			<form onSubmit={(e) => onSubmitHandler(e)}>
				<h4>Title of the Event</h4>
				<input name="title" onChange={(e) => onChangeHandler(e)} type="text" />
				<h4>Description of the event</h4>
				<textarea
					name="description"
					onChange={(e) => onChangeHandler(e)}
					id=""
					cols={30}
					rows={10}></textarea>
				<h4>Date of the Event</h4>
				<input
					name="date"
					onChange={(e) => onChangeHandler(e)}
					type="date"
					id=""
				/>
				<h4>Image of the Event</h4>
				<input type="file" />
				<button>Submit</button>
			</form>
		</Details>
	);
};
export default EventForm;
