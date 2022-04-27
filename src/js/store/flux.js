const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			favorites: [],

			people: [],
			planets: []
		},
		actions: {

			getInfo: (url, sendTo) => {
				fetch(url)
					.then((response) => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ [sendTo] : data.results }))
					.catch((err) => console.log(err));
			},

			addToFavs: (newFav, index) => {
				let newFavorites = getStore().favorites;
				newFavorites.push(newFav);

				setStore({ favorites: newFavorites });
			},

			deleteFavorite: (name)=> {
				let filtered= getStore().favorites.filter((item) => item.name != name);

				setStore({ favorites: filtered });
			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
