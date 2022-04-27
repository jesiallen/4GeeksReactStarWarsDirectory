import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const Navbar = (props) => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 p-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="dropdown ml-auto">
				<button className="btn btn-secondary dropdown-toggle"
					type="button" id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					Favorites
				</button>


				{store.favorites.length == 0 ?
					<ul className="dropdown-menu" style={{ display: "none" }}></ul> :

					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((favorite, index) => {
							return (
								<li key={index}>
									<Link to={{
										pathname: `/details/${favorite.name}`,
										state: favorite,
									}}>
										<span>
											{favorite.name}
										</span>
									</Link>
										<span onClick={() => actions.deleteFavorite(favorite.name)}>
											<i className="fas fa-ban"></i>
										</span>
								</li>
							);
						})}
					</ul>
				}


			</div>
		</nav>
	);
}

Navbar.propTypes = {
	match: PropTypes.object
};
