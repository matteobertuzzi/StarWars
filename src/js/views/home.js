import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const charachters = store.charachters;
	const planets = store.planets;
	const vehicles = store.vehicles;
	const placeholderImg = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';

	function errorImg(e) {
		e.target.src = placeholderImg;
	}


	return (
		<div className="container-fluid">
			<div className='searchBar'>
			// here goes search bar
			</div>
			<div className="link d-flex justify-content-center my-3">
				<Link to='/characters' className="btn btn-primary mx-3">Charachters</Link>
				<Link to='/planets' className="btn btn-primary mx-3">Planets</Link>
				<Link to='/vehicles' className="btn btn-primary mx-3">Vehicles</Link>
			</div>
			<div className="row characters d-flex justify-content-center mt-5">
				<h2>Charachters</h2>
				{charachters.map((char) => {
					return (
						<div className="card m-2" style={{ width: '18rem' }}>
							<img className="card-img-top" src={'https://starwars-visualguide.com/assets/img/characters/' + char.uid + '.jpg'} alt="Card image cap" onError={errorImg} />
							<div className="card-body">
								<h5 className="card-title">{char.name}</h5>
								<p className="card-text">{char.uid}</p>
								<Link className='btn btn-primary' to={'/character/' + char.uid}>Details</Link>
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
							<img className="card-img-top" src={'https://starwars-visualguide.com/assets/img/planets/' + plan.uid + '.jpg'} alt="Card image cap" onError={errorImg} />
							<div className="card-body">
								<h5 className="card-title">{plan.name}</h5>
								<p className="card-text">{plan.uid}</p>
								<Link className='btn btn-primary' to={'/planet/' + plan.uid}>Details</Link>
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
							<img className="card-img-top" src={'https://starwars-visualguide.com/assets/img/vehicles/' + vehicle.uid + '.jpg'} alt="Card image cap" onError={errorImg} />
							<div className="card-body">
								<h5 className="card-title">{vehicle.name}</h5>
								<p className="card-text">{vehicle.uid}</p>
								<Link className="btn btn-primary" to={'/vehicle/' + vehicle.uid}>Details</Link>
							</div>
						</div>
					)
				})}
			</div>

		</div >
	);

};
