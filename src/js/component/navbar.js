import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import FavoriteButton from '../views/FavoriteButton.jsx'

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark m-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<Link to="/characters">
				<span className="navbar-brand mb-0 h1">Charachters</span>
			</Link>
			<Link to="/planets">
				<span className="navbar-brand mb-0 h1">Planets</span>
			</Link>
			<Link to="/vehicles">
				<span className="navbar-brand mb-0 h1">Vehicles</span>
			</Link>
			<FavoriteButton />
		</nav>
	);
};
