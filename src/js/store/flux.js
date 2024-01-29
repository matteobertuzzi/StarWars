const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charachters:[],
			planets:[],
			vehicles:[]
			
		},
		actions: {

			getCharacters: async ()=>{

				const baseUrl = 'https://www.swapi.tech/api/people/';
				let payload =[];
				for (let i=1;i<11;i++){
					const url = baseUrl+i;
					const response = await fetch(url);
					if(!response.ok){
						console.log(response.status, response.statusText);
						return response.statusText;
					};
					const data = await response.json();
					console.log(data)
					payload.push(data);

				}
				setStore({charachters:payload});
					console.log(store.charachters)
			},

			getPlanets: async ()=>{

				const baseUrl = 'https://www.swapi.tech/api/planets/';
				let payload =[];

				for (let i=1;i<11;i++){
					const url = baseUrl+i;
					const response = await fetch(url);
					if(!response.ok){
						console.log(response.status, response.statusText);
						return response.statusText;
					};
					const data = await response.json();
					console.log(data)
					payload.push(data)

				}
				setStore({planets:payload});
				console.log(store.planets)
			},

			getVehicles: async ()=>{

				const baseUrl = 'https://www.swapi.tech/api/vehicles/';
				let payload=[];
				for (let i=1;i<11;i++){
					const url = baseUrl+i;
					const response = await fetch(url);
					if(!response.ok){
						console.log(response.status, response.statusText);
						return response.statusText;
					};
					const data = await response.json();
					console.log(data);
					payload.push(data);
				}
				setStore({vehicles:payload});
					console.log(store.vehicles);
			},
			
		}
	};
};

export default getState;
