import React, { useState } from 'react';
import styled from 'styled-components';
import { studentSignup } from '../Actions/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

//actions

const SignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = useSelector((store: any) => store.Auth);

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		password2: ''
	});
	const [passCheck, setPassCheck] = useState(false);
	const { firstName, lastName, email, password, password2 } = formData;
	const inputHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			setPassCheck(true);
			return;
		}
		console.log({
			firstName,
			lastName,
			email,
			password
		});
		dispatch(studentSignup({ firstName, lastName, email, password }, navigate));
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
						name="firstName"
						required
					/>
				</div>
				<div className="name">
					<input
						onChange={(e) => inputHandler(e)}
						type="text"
						placeholder="last name"
						id="name"
						name="lastName"
						required
					/>
				</div>
				<div className="email">
					<input
						onChange={(e) => inputHandler(e)}
						type="email"
						placeholder="email"
						id="email"
						name="email"
						required
					/>
				</div>
				<div className="password">
					<input
						onChange={(e) => inputHandler(e)}
						type="password"
						placeholder="password"
						id="password"
						name="password"
						required
					/>
				</div>
				<div className="password2">
					<input
						onChange={(e) => inputHandler(e)}
						type="password"
						placeholder="Confirm Password"
						id="password2"
						name="password2"
						required
					/>
				</div>
				{auth.alreadyExists && !auth.isLoading && (
					<h5 style={{ color: 'red' }}> Account already exists </h5>
				)}
				{passCheck && <h5 style={{ color: 'red' }}>Password did not match</h5>}
				<div className="submit">
					<button onChange={(e) => inputHandler(e)} type="submit">
						Sign Up
					</button>
				</div>
				<h4>
					Are you an Organizer?{' '}
					<span>
						<Link to="/test">Login as Organizer</Link>
					</span>
				</h4>
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
	border-bottom: 8px solid #000000;
	border-radius: 1rem;
	margin-top: 1rem;
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
			box-shadow: 1px 1px 2px #000000;
		}
		margin: 1rem;
	}
	h2 {
		color: #000000;
	}
	button {
		background-color: #000000;
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
			color: #030122;
		}
	}
`;
export default SignUp;
