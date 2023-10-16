import React , { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/Card"
import Planet from "../component/Planet";
import Vehicle from "../component/Vehicle"
export const Home = () => {
	const {store, actions} = useContext(Context)

	console.log("PEOPLE FROM STORE", store.people)
	
	return (
		<div className="text-center mt-5">
			<h2 className="title">Characters</h2>
			<div className="card-container">
			{store.people.map((person,index)=>{
				return(<Card key={index} person={person} id={index}/>)
			})}	
			</div>
			<h2 className="title">Planets</h2>
			<div className="card-container">
			{store.planets.map((planet,index)=>{
				return(<Planet key={index} planet={planet} id={index}/>)
			})}	
			</div>
			<h2>Vehicle</h2>
			<div className="card-container">
			{store.vehicles.map((Vehicle,index)=>{
				return(<Vehicle key={index} planet={planet} id={index}/>)
			})}	
			</div>
		</div>
		
	)
}
