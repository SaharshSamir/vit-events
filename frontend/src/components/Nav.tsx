import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import vitlogo from '../images/vitlogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../Reducers/type';

const Nav: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const auth = useSelector((store: any) => store.Auth);
	const path = location.pathname;
	const logoutHandler = () => {
		document.cookie = '';
		dispatch({
			type: LOGOUT
		});
		navigate('/');
	};
	return (
		<NavStyled>
			<div className={path !== '/' ? 'black' : 'white'}>
				<div className="left">
					<div className="logo">
						<img src={vitlogo} alt="" />
					</div>
				</div>
				<div className="right">
					<div className="aboutus">
						<h4>About Us</h4>
					</div>
					{auth.isAuthenticated && (
						<>
							<div className="student">
								<h4>
									<Link
										to={
											localStorage.getItem('token')
												? `dashboard/student`
												: `dashboard/organizer`
										}>
										DashBoard
									</Link>
								</h4>
							</div>

							<div onClick={logoutHandler} className="logout">
								<h4>Log Out</h4>
							</div>
						</>
					)}

					{!auth.isAuthenticated && (
						<div className="loginSignup">
							<h4>
								<Link
									style={
										path !== '/' ? { background: 'black', color: 'white' } : {}
									}
									to="/login">
									Login{' '}
								</Link>
								<span>or</span>
								<Link
									style={
										path !== '/' ? { background: 'black', color: 'white' } : {}
									}
									to="/signup">
									Signup
								</Link>
							</h4>
						</div>
					)}
				</div>
			</div>
		</NavStyled>
	);
};

const NavStyled = styled.div`
	.black,
	.white {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		border-radius: 0 0 1rem 1rem;
		z-index: 2;
	}
	.black {
		background-color: black;
		color: white;
		a {
			color: white;
		}
	}
	.white {
		a {
			color: black;
		}
	}
	.logout {
		cursor: pointer;
	}
	a {
		text-decoration: none;
	}
	img {
		height: 4rem;
		margin: 0.2rem 0.5rem;
		filter: brightness(200%);
	}
	.right {
		display: flex;
		justify-content: space-evenly !important;
		align-items: center;
		* {
			margin-right: 2rem;
		}
	}
`;
export default Nav;
