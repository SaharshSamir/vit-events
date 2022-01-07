import React, { useState } from 'react';
import styled from 'styled-components';
const OrganzerDetail = () => {
	const [data, setData] = useState({
		name: '',
		desc: '',
		linkedIn: '',
		Instagram: '',
		Twitter: '',
		YouTube: ''
	});

	const onChangeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(data);
	};
	return (
		<Details>
			<form onSubmit={(e) => onSubmitHandler(e)}>
				<h2>Add your details</h2>
				<h4>Name: </h4>
				<input name="name" onChange={(e) => onChangeHandler(e)} type="text" />
				<h4>Description of your club</h4>
				<textarea
					name="desc"
					onChange={(e) => onChangeHandler(e)}
					id=""
					rows={5}
					cols={53}></textarea>
				<h4>Social media Links</h4>
				<p>LinkedIn</p>
				<input
					name="linkedIn"
					onChange={(e) => onChangeHandler(e)}
					type="url"
					id=""
				/>
				<p>Instagram</p>
				<input
					onChange={(e) => onChangeHandler(e)}
					type="url"
					name="Instagram"
					id=""
				/>
				<p>Twitter</p>
				<input
					onChange={(e) => onChangeHandler(e)}
					type="url"
					name="Twitter"
					id=""
				/>
				<p>YouTube</p>
				<input
					onChange={(e) => onChangeHandler(e)}
					type="url"
					name="YouTube"
					id=""
				/>
				<br />
				<button onSubmit={(e) => onSubmitHandler(e)}>Submit</button>
			</form>
		</Details>
	);
};

const Details = styled.div`
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
	textArea {
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
`;

export default OrganzerDetail;
