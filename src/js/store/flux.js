const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charachters: [],
			character: {},
			planets: [],
			vehicles: [],

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
			}

		}
	};
};

export default getState;
