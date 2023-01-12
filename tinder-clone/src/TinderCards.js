import { Person } from "@mui/icons-material";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
	const [people, setPeople] = useState([
		{ data: "Elon Musk" },
		{ data: "Jeff Bezos" },
	]);

	return (
		<div className="TinderCards">
			<div className="tinderCards__cardsContainer">
				{people.map((person) => (
					<TinderCard
						className="swipe"
						key={person.data}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => (dir, person.data)}
						onCardLeftScreen={() => outofFrame(person.data)}
					></TinderCard>
				))}
			</div>
		</div>
	);
}

export default TinderCards;
