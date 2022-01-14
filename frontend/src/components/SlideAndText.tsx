import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import slide1 from '../images/slide1.jpeg';
import slide2 from '../images/slide2.jpeg';
import slide3 from '../images/slide3.jpeg';
import slide4 from '../images/slide4.jpeg';
import slide5 from '../images/slide5.jpeg';
import { Link } from 'react-router-dom';

const Slide: React.FC = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<Main>
			<div className="slide">
				<Slider {...settings}>
					<div>
						<img className="image" src={slide2} alt="" />
					</div>
					<div>
						<img className="image" src={slide1} alt="" />
					</div>
					<div>
						<img className="image" src={slide3} alt="" />
					</div>
					<div>
						<img className="image" src={slide4} alt="" />
					</div>
					<div>
						<img className="image" src={slide5} alt="" />
					</div>
				</Slider>
			</div>
			<div className="text">
				<div className="right">
					<div className="vit">
						VIT<div className="events">EVENTS</div>
					</div>
					<div className="desc">
						A one stop destination for all the happenings in VIT, so that you
						never miss another event, and just makes your life a little easier!
						<br />
						Check out some events here!
					</div>
					<Link to="/getEvents">Browse</Link>
				</div>
			</div>
		</Main>
	);
};

const Main = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	/* overflow-x: hidden; */
	.slide {
		z-index: 1;
		height: 40rem;
		width: 100rem;
		/* background-color: black; */
		margin-right: 4rem;
		overflow-x: hidden;
		margin-top: -6rem;
		position: relative;
		.slick-next {
			position: absolute;
			top: 50%;
			z-index: 10;
			left: 70%;
			width: 8rem;
			height: 4rem;
			font-size: 10rem;
		}
		.slick-prev {
			position: absolute;
			top: 51.4%;
			left: 2%;
			z-index: 10;
		}
		.slick-dots {
			z-index: 10;
		}
	}
	.image {
		width: 50rem;
		height: 38rem;
	}
	.text {
		z-index: 1;
		width: 90%;
		height: 100vh;
		margin-top: -12rem;
		background-color: white;
		transform: rotate(-8deg);
		margin-left: -15rem;
		overflow: hidden;
	}
	.right {
		margin-top: 10rem;
		transform: rotate(8deg);
		padding: 4rem;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		.vit {
			font-size: 5rem;
			position: relative;
			align-items: flex-start;
			&::after {
				content: '';
				position: absolute;
				top: 44%;
				left: 18%;
				width: 14rem;
				height: 4px;
				background-color: black;
			}
		}
		.events {
			margin-left: 2.4rem;
		}
		a {
			margin: auto;
			text-decoration: none;
			color: black;
			border: 2px solid black;
			border-radius: 0.8rem;
			padding: 0.4rem 2rem;
			font-size: 20px;
			font-weight: bold;
			transition: 0.4s ease;
			box-shadow: 0px 2px 20px #a09f9f;
			&:hover {
				background-color: #1f1e1e;
				box-shadow: 0px 2px 20px #d3d3d3;
				color: white;
			}
		}
	}
	.desc {
		font-size: 18px;
		padding: 2rem 2rem 2rem 0rem;
	}
`;

export default Slide;
