import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css"

const Vehicle = (props)=> {
    
    const { store, actions } = useContext(Context);
    return(
        <div className="card" style={{width: "18rem"}}>
         
            <img 
                src={`https://starwars-visualguide.com/assets/img/characters/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }}
                className="card-img-top"  
                style={{maxHeight: "300px", objectFit: "cover"}} 
                alt="Images of Star Wars Characters" 
            />
            <div className="card-body">
                <h5 className="card-title">{props.vehicle.name}</h5>
                <div className="data">
                <p className="card-text">weight: {props.vehicle.model}</p>
                <p className="card-text">Eye color: {props.vehicle.manufacturer}</p>
                <p className="card-text">skin color: {props.vehicle.length}</p>
                </div>
                <div className="hear-select">
                    <Link to={'/about/people/'+ props.id}>
                        <span className="btn btn-primary">about</span>
                    </Link>
                    <button className="btn btn-outline-warning fa-regular fa-heart ms-4" style={{"color": "#514b1f"}} onClick={()=>
                        {
                            if( actions.check_favorites(props.vehicle.name) ){
                                actions.remove_favorites(props.vehicle.name)
                            }
                            else{
                                actions.append_favorites(props.vehicle.name)
                            }
                          console.log(store.favorites)
                    }
                }
                    >
                    
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Vehicle