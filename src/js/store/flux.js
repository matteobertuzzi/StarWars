const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charachters: [],
			character: {},
			charDetails: {},
			planets: [],
			planet: {},
			planetInfo: {},
			vehicles: [],
			vehicle: {},
			vehicleInfo: {},
			favoriteCharacters: [],
			favoritePlanets: [],
			favoriteVehicles: [],

		},
		actions: {

			getCharacters: async () => {

				const baseUrl = 'https://www.swapi.tech/api/people/';
				const response = await fetch(baseUrl);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.results;
				console.log(results);
				setStore({ charachters: results });
			},

			getPlanets: async () => {

				const baseUrl = 'https://www.swapi.tech/api/planets/';
				const response = await fetch(baseUrl);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data)
				const results = data.results;
				console.log(results);
				setStore({ planets: results });
			},

			getVehicles: async () => {

				const baseUrl = 'https://www.swapi.tech/api/vehicles/';
				const response = await fetch(baseUrl);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data)
				const results = data.results;
				console.log(results);
				setStore({ vehicles: results });
			},

			getCharacterInfo: async (id) => {
				const baseUrl = 'https://www.swapi.tech/api/people/';
				const url = baseUrl + id;
				const response = await fetch(url);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.result;
				console.log('infoDetail ', results);
				setStore({ character: results });
				setStore({ charDetails: results.properties })
			},

			getPlanetInfo: async (id) => {
				const baseUrl = 'https://www.swapi.tech/api/planets/';
				const url = baseUrl + id;
				const response = await fetch(url);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.result;
				console.log('infoDetail ', results);
				setStore({ planet: results });
				setStore({ planetInfo: results.properties });
			},

			getVehicleInfo: async (id) => {
				const baseUrl = 'https://www.swapi.tech/api/vehicles/';
				const url = baseUrl + id;
				const response = await fetch(url);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.result;
				console.log('infoDetail ', results);
				setStore({ vehicle: results });
				setStore({ vehicleInfo: results.properties });
			},

			setFavoriteChar: (newFav) => {
				setStore({ favoriteCharacters: newFav });
			},

			setFavoritePlan: (id) => {
				setStore(favoritePlanets.push(id))
			},

			setFavoriteVeh: (id) => {
				setStore(favoriteVehicles.push(id))
			},


			getCharacterPages: async () => {

				const baseUrl = 'https://www.swapi.tech/api/people?page=2&limit=10';
				const response = await fetch(baseUrl);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.results;
				console.log(results);
			},

		},
	};
};

export default getState;
