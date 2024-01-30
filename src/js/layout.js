import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Favorites from './views/Favorites.jsx';
import CharacterDetails from './views/CharacterDetails.jsx';
import PlanetDetails from './views/PlanetDetails.jsx';
import VehicleDetails from './views/VehicleDetails.jsx';

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='/character/:id' element={<CharacterDetails />} />
					<Route path='/planet/:id' element={<PlanetDetails />} />
					<Route path='/vehicle/:id' element={<VehicleDetails />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
