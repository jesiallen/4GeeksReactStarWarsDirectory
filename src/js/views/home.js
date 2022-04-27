import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const char = "https://d31xsmoz1lk3y3.cloudfront.net/games/images/map_img_887069_1481236446.jpg";
	const world = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5yW6XSsnHRX8fwzRyi1QAxYIitGN6NIdAw&usqp=CAU";
	return (
		<div className="text-center mt-5">
			<h2 className="mb-5">Star Wars Directory</h2>
			<section>
				<h3 className="m-3">Characters</h3>
				<div className="cardRow mb-5">
					{store.people ? store.people.map((people, index) => {
						return <Card key={index} group={people} img={char} />
					}) : "waiting"}
				</div>
			</section>
			<section>
				<h3 className="m-3">Planets</h3>
				<div className="cardRow mb-5">
					{store.planets ? store.planets.map((planet, index) => {
						return <Card key={index} group={planet} img={world} />
					}) : "waiting"}
				</div>
			</section>


		</div>)
};
