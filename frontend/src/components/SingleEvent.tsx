import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

const SingleEvent = ({ name, desc, registration, date, color }) => {
	return (
		<Event>
			<div style={{ backgroundColor: color }} className="main">
				<div className="left">
					<h2>{name}</h2>
					<p>{desc}</p>
				</div>
				<div className="right">
					<Moment format="MMMM Do, YYYY">{date}</Moment>
					<a href={registration} target="_blank">
						Register here
					</a>
				</div>
			</div>
		</Event>
	);
};
const Event = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.main {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 2rem;
		background-color: beige;
		width: 70%;
		position: relative;
		padding: 1rem;
		border-radius: 1rem;
		@media (max-width: 768px) {
			flex-wrap: wrap;
		}
	}
	.left,
	.right {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
	}
	.left {
		max-width: 80%;
		width: 80%;
		p {
			width: 100%;
			line-break: loose;
		}
	}
	.right {
		justify-content: space-between;
		a {
			text-decoration: none;
			color: black;
			padding: 0.8rem;
			font-size: 1.2rem;
			border: 1px solid black;
			margin-top: 1rem;
			transition: 0.4s ease-in-out;
		}
		a:hover {
			border-radius: 2rem;
		}
	}
`;
export default SingleEvent;
