import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import HomeCarousel from '../component/Carousel.jsx'

export const Home = () => {
	const { store, actions } = useContext(Context);
	const charachters = store.charachters;
	const planets = store.planets;
	const vehicles = store.vehicles;
	const placeholderImg = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';

	function errorImg(e) {
		e.target.src = placeholderImg;
	};


	return (
		<div className='container my-5'>
			<HomeCarousel />
		</div>
	);

};
