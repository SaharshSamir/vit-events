import React, { useState } from 'react';
import styled from 'styled-components';
import updateOrganizer from '../Actions/Profile';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
const OrganzerDetail = () => {
	const user = useSelector((store: any) => store.Auth);
	const [social, setSocial] = useState({
		facebook: '',
		instagram: '',
		twitter: '',
		discord: ''
	});
	const [data, setData] = useState({
		organizer_id: user?.user?._id,
		email: user?.user?.email,
		name: '',
		contactEmail: user?.user?.email,
		socials: social
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onChangeHandlerSocials = (e) => {
		setSocial({ ...social, [e.target.name]: e.target.value });
		setData({ ...data, socials: social });
	};
	const onChangeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const onChangeHandlerSocials2 = (e) => {
		setSocial({ ...social, [e.target.name]: e.target.value });
		setData({ ...data, socials: social });
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		console.log(data);
		dispatch(updateOrganizer(data, navigate));
	};
	return (
		<Details>
			<form onSubmit={(e) => onSubmitHandler(e)}>
				<h2>Add your details</h2>
				<h4>Name: </h4>
				<input name="name" onChange={(e) => onChangeHandler(e)} type="text" />
				{/* <h4>Description of your club</h4> */}
				{/* <textarea
					name="desc"
					onChange={(e) => onChangeHandler(e)}
					id=""
					rows={5}
					cols={53}></textarea> */}
				<h4>Social media Links</h4>
				<p>Facebook</p>
				<input
					name="facebook"
					onChange={(e) => onChangeHandlerSocials(e)}
					type="url"
					id=""
				/>
				<p>Discord</p>
				<input
					onChange={(e) => onChangeHandlerSocials(e)}
					type="url"
					name="discord"
					id=""
				/>
				<br />
				<p>Instagram</p>
				<input
					onChange={(e) => onChangeHandlerSocials(e)}
					type="url"
					name="instagram"
					id=""
				/>
				<p>Twitter</p>
				<input
					onChange={(e) => onChangeHandlerSocials2(e)}
					type="url"
					name="twitter"
					id=""
				/>

				<button onSubmit={(e) => onSubmitHandler(e)}>Submit</button>
			</form>
		</Details>
	);
};

export const Details = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	body {
		box-sizing: border-box;
	}
	h2 {
		text-align: center;
	}
	margin-bottom: 4rem;
	form {
		width: 30%;
	}
	input {
		width: 96%;
		background-color: #e2e2e2;
		border: none;
		font-size: 1rem;
		padding: 0.5rem;
	}

	button {
		margin-top: 2rem;
		width: 100%;
		background-color: black;
		color: white;
		border: none;
		padding: 0.6rem;
		font-size: 1rem;
	}
	@media (max-width: 768px) {
		form,
		textarea {
			width: 80%;
		}
	}
`;
export default OrganzerDetail;
