import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"
import { Context } from "../store/appContext";
export const Navbar = (props) => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" className="starwars-logo"/></span>
			</Link>
			<div className="ml-auto justify-content-center flex d-flex">
			
				<div className="dropdown d-flex ">
						
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
								favorites 
								<div className="counter">
									{store.favorites.length}
								</div>
						</div>
					</button>
				<ul className="dropdown-menu dropdown-menu-end ">
					{store.favorites.map(name=>
					<li className="dropdown-item ">
						{
							name
						}
						   <button className="btn btn-outline-warning ms-4" style={{"color": "#514b1f"}} onClick={()=>
                        {
                            if( actions.check_favorites(name) ){
                                actions.remove_favorites(name)
                            }
                            else{
                                actions.append_favorites(name)
                            }
                          console.log(store.favorites)
                    }
                }
                    >
						
						<i class="fa-solid fa-trash"></i>
                    	</button>
					</li>)}
				</ul>
</div>			
			</div>
		</nav>
	);
};
