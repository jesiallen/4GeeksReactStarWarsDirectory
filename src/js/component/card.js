import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card = props => {
    const { store, actions } = useContext(Context);
    const fav = store.favorites.find((favorite)=>{
        return favorite.name == props.group.name;
    });


    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src= {props.img}
                className="card-img-top" alt={props.group.name} />
            <div className="card-body">
                <h5 className="card-title">{props.group.name}</h5>
                <ul className="card-text">
                </ul>
                <Link to={{
                    pathname: `/details/${props.group.name}`,
                    state: props.group,
                }}>
                    <button className="btn btn-primary"
                        type="text"
                    >Learn More</button>
                </Link>
                <span onClick={() => fav ? actions.deleteFavorite(props.group.name) : actions.addToFavs(props.group)}>
                        <i className={fav ? "fas fa-heart fa-2x" : "far fa-heart fa-2x"}></i>
                </span>
            </div>
        </div>

    );
};

Card.propTypes = {
    match: PropTypes.object
};