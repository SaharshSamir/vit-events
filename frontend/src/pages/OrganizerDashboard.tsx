import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_USER } from '../Reducers/type';
import SingleEvent from '../components/SingleEvent';
import styled from 'styled-components';
//images

import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import { getOrganizerEvents } from '../Actions/Events';
interface errorObj {
	name?: string;
	message?: string;
	expiredA?: string;
	err?: any;
}

const OrganizerDashboard = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({} as errorObj);
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const storeUser = useSelector((store: any) => store.Auth.user);
	const Events = useSelector((store: any) => store.EventReducer.clubEvents);
	useEffect(() => {
		async function getData() {
			const {
				user: resUser,
				loading: resLoading,
				error: resError
			} = await getAuth();

			// console.log(resUser);
			// console.log(resLoading);
			// console.log(resError);
			const val = resUser as any;
			const val1 = val.organizerProfile;
			setName(val1.name);
			dispatch({
				type: LOAD_USER,
				payload: val1
			});
			setUser(resUser as any);

			setLoading(resLoading);
			setError(resError as any);
		}
		dispatch(getOrganizerEvents(storeUser?._id));

		getData();
	}, []);
	if (error?.err?.message) {
		console.log('hey');
		navigate('/');
	}
	const colors = ['#d1efff', '#fffdd1', '#ffd4d1', '#d1ffdb'];
	return (
		<Dash>
			{loading ? (
				'Loading...'
			) : (
				<div>
					<div className="logo">
						<div className="logoimg">
							<p>{name.substr(0, 1).toUpperCase()}</p>
						</div>
					</div>
					<div className="details">
						<h2>{name}</h2>
						{!storeUser?.socials ? (
							<div className="make">
								<h2>You Do not have a profile. Please make one here</h2>
								<Link to="/organizer/addDetail">Add details</Link>
							</div>
						) : (
							<div className="bottom-details">
								<div className="events">
									{Events?.length === 0 ? (
										<div>
											<h2>You do not have any events</h2>
											<p>Make some here: </p>
											<Link to="/addEvent"></Link>
										</div>
									) : (
										<div>
											<h2>Your events:</h2>
											{Events?.map((event, i) => (
												<SingleEvent
													name={event.title}
													desc={event.description}
													date={event.date}
													registration={event.registration}
													color={colors[i % colors.length]}
													id={event._id}
													fromAll={false}
												/>
											))}
										</div>
									)}
								</div>
								<div className="socials">
									<div className="email">{storeUser?.email}</div>
									<p>SOCIALS</p>
									<div className="social-links">
										<a href={storeUser?.socials?.facebook}>
											{' '}
											<img src={facebook} alt="face" />
										</a>
										<a href={storeUser?.socials?.instagram}>
											<img src={instagram} alt="insta" />
										</a>
										<a href={storeUser?.socials?.linkedin}>
											<img src={linkedin} alt="linked" />
										</a>
										<a href={storeUser?.socials?.twitter}>
											<img src={twitter} alt="twitter" />
										</a>
									</div>
									<h4>Edit your Profile</h4>
									<Link to="/organizer/addDetail">update</Link>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</Dash>
	);
};
const Dash = styled.div`
	.logo {
		display: flex;
		justify-content: flex-start;
		position: relative;
		margin-top: 2rem;
	}
	.logoimg {
		background-color: #5c97ca;
		border: 2px solid black;
		border-radius: 50%;
		width: 15rem;
		height: 15rem;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 5rem;
		margin-left: 4rem;
	}
	.logo::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 0.2rem;
		background-color: black;
		top: 80%;
		z-index: -2;
	}

	.details {
		margin-left: 4rem;
		a {
			color: black;
			border-radius: 1rem;
			border: 2px solid black;
			padding: 0.4rem;
			font-size: 1.4rem;
			text-decoration: none;
		}
	}
	.bottom-details {
		display: flex;
		justify-content: space-around;
		.events {
			width: 40%;
		}
		.socials {
			width: 30%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-direction: column;
			padding: 2rem;
			margin: -2rem;
			border-left: 4px solid gray;
			font-size: 1.3rem;
			.social-links {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 50%;
				flex-wrap: wrap;
				a {
					text-decoration: none;
					border: none;
					padding: 1rem;
				}
				img {
					width: 4rem;
					height: 4rem;
				}
			}
		}
	}
`;

export default OrganizerDashboard;
