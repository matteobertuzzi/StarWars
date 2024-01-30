import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const charachters = store.charachters;
	const planets = store.planets;
	const vehicles = store.vehicles;



	return (
		<div className="container-fluid">
			<div className='searchBar'>
			// here goes search bar
			</div>
			<div className='characters'>
				<h2>Characters</h2>
				<ul id='parent'>
					{charachters.map((char) => {
						return (
							<li key='char.uid'>
								name: {char.name}
							</li>
						);
					})}
				</ul>
			</div>
			<div className='characters'>
				<h2>Planets</h2>
				<ul id='parent'>
					{planets.map((char) => {
						return (
							<li key='char.uid'>
								name: {char.name}
							</li>
						);
					})}
				</ul>
			</div>
			<div className='characters'>
				<h2>Vehicles</h2>
				<ul id='parent'>
					{vehicles.map((char) => {
						return (
							<li key='char.uid'>
								name: {char.name}
							</li>
						);
					})}
				</ul>
			</div>

		</div>
	);
};
