import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

//actions

const SignUp = () => {
	const [formData, setFormData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		password2: ''
	});
	const { firstname, lastname, email, password, password2 } = formData;
	const inputHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			console.log('not equal password');
		}
		console.log({
			firstname,
			lastname,
			email,
			password
		});
	};

	return (
		<SignUpStyle>
			<form onSubmit={(e) => submitHandler(e)}>
				<h2>Sign up</h2>
				<h4>Create an account</h4>
				<div className="name">
					<input
						onChange={(e) => inputHandler(e)}
						type="text"
						placeholder="First Name"
						id="name"
						name="firstname"
					/>
				</div>
				<div className="name">
					<input
						onChange={(e) => inputHandler(e)}
						type="text"
						placeholder="last name"
						id="name"
						name="lastname"
					/>
				</div>
				<div className="email">
					<input
						onChange={(e) => inputHandler(e)}
						type=""
						placeholder="email"
						id="email"
						name="email"
					/>
				</div>
				<div className="password">
					<input
						onChange={(e) => inputHandler(e)}
						type="password"
						placeholder="password"
						id="password"
						name="password"
					/>
				</div>
				<div className="password2">
					<input
						onChange={(e) => inputHandler(e)}
						type="password"
						placeholder="Confirm Password"
						id="password2"
						name="password2"
					/>
				</div>
				<div className="submit">
					<button onChange={(e) => inputHandler(e)} type="submit">
						Sign Up
					</button>
				</div>
				<h4>
					Already have an account?{' '}
					<span>
						<Link to="/login">Login</Link>
					</span>
				</h4>
			</form>
		</SignUpStyle>
	);
};

const SignUpStyle = styled.div`
	width: 40%;
	margin: auto;
	position: absolute;
	top: 55%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #eeeff7;
	border-bottom: 8px solid #6470c4;
	border-radius: 1rem;
	@media screen and (max-width: 680px) {
		width: 80%;
	}
	.name,
	.email,
	.password,
	.password2 {
		input {
			padding: 0.4rem;
			border-radius: 0.4rem;
			border: none;
			box-shadow: 1px 1px 2px #6470c4;
		}
		margin: 1rem;
	}
	h2 {
		color: #6470c4;
	}
	button {
		background-color: #6470c4;
		color: white;
		padding: 0.4rem;
		font-size: 15px;
		border: none;
		border-radius: 0.4rem;
		cursor: pointer;
		width: 12rem;
	}
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h4 {
		margin: 1rem;
		span a {
			text-decoration: none;
			color: #6470c4;
		}
	}
`;
export default SignUp;
