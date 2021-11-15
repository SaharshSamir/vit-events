import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { LoginAction } from '../Actions/Auth';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const auth = useSelector((store: any) => store.Auth);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		type: ''
	});
	const inputHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const { type, email, password } = formData;
	const submitHandler = async (e) => {
		e.preventDefault();
		console.log(formData);
		dispatch(LoginAction({ type, email, password }, navigate));
	};

	return (
		<>
			<SignUpStyle>
				<form onSubmit={(e) => submitHandler(e)}>
					<h2>Login</h2>
					<h4>Login to your account</h4>

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
					<div className="StudOrgan">
						<input
							onChange={(e) => inputHandler(e)}
							type="radio"
							placeholder="password"
							id="stud"
							name="type"
							value="STUDENT"
						/>
						<label htmlFor="stud">Student?</label>
						<input
							onChange={(e) => inputHandler(e)}
							type="radio"
							placeholder="password"
							id="organization"
							name="type"
							value="ORGANIZER"
						/>
						<label htmlFor="organization">Organizer?</label>
					</div>
					<div className="message">
						{auth.message && <h5>{auth.message}</h5>}
					</div>
					<div className="submit">
						<button onChange={(e) => inputHandler(e)} type="submit">
							Login
						</button>
					</div>
					<h4>
						Don't have an account?{' '}
						<span>
							<Link to="/signup">Sign up</Link>
						</span>
					</h4>
				</form>
			</SignUpStyle>
		</>
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
	padding: 2rem;
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
	.StudOrgan {
		padding: 1rem;
	}
`;
export default Login;
