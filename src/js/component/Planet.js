import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
const Planet= (props)=> {
    const { store, actions } = useContext(Context);
    
    return(
        <div className="card" style={{width: "18rem"}}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/planets/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }}
                className="card-img-top"  
                style={{maxHeight: "300px", objectFit: "cover"}} 
                alt="Images of Star Wars Planets" 
            />
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
                <p className="card-text">Terrain: {props.planet.terrain}</p>
                <p className="card-text">Population: {props.planet.population}</p>
                <p className="card-text">Diameter: {props.planet.diameter}</p>
                <Link to={'/about/planets/'+ props.id}>
                    <span className="btn btn-primary">about</span>
                </Link>
                <button className="btn btn-outline-warning fa-regular fa-heart ms-4" style={{"color": "#514b1f"}} onClick={()=>
                        {
                            if(actions.check_favorites(props.planet.name)){
                                actions.remove_favorites(props.planet.name)
                            }
                           else{
                            actions.append_favorites(props.planet.name)
                           }
                           console.log(store.favorites)
                        }
                       
                    }>

                    </button>
            </div>
        </div>
    )
}
export default Planet