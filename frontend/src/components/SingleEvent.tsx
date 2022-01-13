import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import bookmark from '../images/bookmark.png';
import saved from '../images/saved.png';
import { useDispatch, useSelector } from 'react-redux';
import { bookmarkEvent } from '../Actions/Events';

const SingleEvent = ({
	name,
	desc,
	registration,
	date,
	color,
	id,
	fromAll,
	fromDashBoard
}) => {
	const dispatch = useDispatch();
	const [bookMarked, setBookMarked] = useState(false);
	const watchList = useSelector((store: any) => store.Auth?.user?.watchList);
	useEffect(() => {
		// watchList.map((w) =>
		// 	w.eventId == id ? setBookMarked(true) : setBookMarked(false)
		// );
	}, [id]);

	console.log(id);
	return (
		<Event>
			<div style={{ backgroundColor: color }} className="main">
				<div className="left">
					<h2>{name}</h2>
					<p>{desc}</p>
				</div>
				<div className="right">
					<Moment format="MMMM Do, YYYY">{date}</Moment>
					{!fromDashBoard && (
						<a href={registration} target="_blank">
							Register here
						</a>
					)}
					{fromAll && !fromDashBoard && (
						<div title="bookmark" className="bookmark">
							{bookMarked ? (
								<img
									onClick={() => {
										dispatch(bookmarkEvent(id));
										setBookMarked(!bookMarked);
									}}
									src={bookmark}
									alt="bookmark"
								/>
							) : (
								<img
									onClick={() => {
										dispatch(bookmarkEvent(id));
										setBookMarked(!bookMarked);
									}}
									src={saved}
									alt="bookmark"
								/>
							)}
						</div>
					)}
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
		flex-wrap: wrap;
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
		max-width: 60%;
		width: 60%;
		p {
			width: 100%;
			line-break: loose;
		}
	}
	.right {
		/* justify-content: space-between; */

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
		.bookmark {
			img {
				width: 2rem;
				height: 2rem;
				margin-top: 1rem;
				cursor: pointer;
			}
		}
	}
`;
export default SingleEvent;
