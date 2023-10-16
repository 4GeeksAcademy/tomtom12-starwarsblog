import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			people: []
			,planets:[]
			,favorites:(localStorage.getItem("favorites") && localStorage.getItem("favorites").length && JSON.parse(localStorage.getItem("favorites")) ) || [] // " ['Luke Skywalker', 'Somethign'] " >> ['Luke Skywalker', 'Somethign']
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://swapi.dev/api/people")
				.then((response)=>response.json())
				.then((data)=>{
					// always console log first
					// console.log(data)
					setStore({people:data.results})
				})

				fetch("https://swapi.dev/api/planets")
				.then((response)=>response.json())
				.then((data)=>{
					// always console log first
					// console.log(data)
					setStore({planets:data.results})
				})
			},
			append_favorites:(name)=>{

				const store = getStore();
				const currentfavorites = store.favorites
				const newfavorites = [...new Set([...currentfavorites,name])]
				localStorage.setItem("favorites",JSON.stringify(newfavorites))
				setStore({favorites:newfavorites})
			},
			check_favorites:(name)=>{
				const store = getStore();
				const currentfavorites = store.favorites
				return currentfavorites.includes(name)
			},
			remove_favorites:(toberemoved)=>{
				const store = getStore();
				const currentfavorites = store.favorites
				const newfavorites = currentfavorites.filter(currentname=>{return currentname != toberemoved})
				localStorage.setItem("favorites",JSON.stringify(newfavorites))
				setStore({favorites:newfavorites})
				
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
