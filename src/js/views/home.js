import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const charachters = store.charachters;
	const char1 = charachters.slice(0, 3);
	const char2 = charachters.slice(3, 6);
	const char3 = charachters.slice(6, 9);
	console.log(char1, char2, char3)

	const planets = store.planets;
	const vehicles = store.vehicles;


	return (
		<div className="container-fluid">
			<div className='searchBar'>
			// here goes search bar
			</div>
			<div className="row characters d-flex justify-content-center mt-5">
				<h2>Charachters</h2>
				{charachters.map((char) => {
					return (
						<div className="card m-2" style={{ width: '18rem' }}>
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">{char.name}</h5>
								<p className="card-text">{char.uid}</p>
								<a href="#" className="btn btn-primary">Details</a>
							</div>
						</div>
					)
				})}
			</div>
			<div className="row planets d-flex justify-content-center mt-5">
				<h2>Planets</h2>
				{planets.map((plan) => {
					return (
						<div className="card m-2" style={{ width: '18rem' }}>
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">{plan.name}</h5>
								<p className="card-text">{plan.uid}</p>
								<a href="#" className="btn btn-primary">Details</a>
							</div>
						</div>
					)
				})}
			</div>
			<div className="row vehicles d-flex justify-content-center mt-5">
				<h2>Vehicles</h2>
				{vehicles.map((vehicle) => {
					return (
						<div className="card m-2" style={{ width: '18rem' }}>
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">{vehicle.name}</h5>
								<p className="card-text">{vehicle.uid}</p>
								<a href="#" className="btn btn-primary">Details</a>
							</div>
						</div>
					)
				})}
			</div>

		</div >
	);

};
