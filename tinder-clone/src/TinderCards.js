import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios.js";

function TinderCards() {
	const [people, setPeople] = useState([
	
	]);
	useEffect(() =>{
		async function fetchData(){
			const req = await axios.get('/tinder/cards');
			setPeople(req.data)
		}	
		fetchData();
	},[])

  const swipped = (direction,nameToDelete) =>{
    console.log("removing"+ nameToDelete)
  }
  const outofFrame = (name) => {
    console.log(name + " left the screen")
  };

	return (
		
		<div className="tinderCards">
			<div className="tinderCards__cardsContainer">
				{people.map((person) => (
					<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swipped(dir, person.name)}
						onCardLeftScreen={() => outofFrame(person.name)}
					> 
					<div style={{backgroundImage: ` url( ${person.imgUrl})` }} className="card">
					<h3>{person.name}</h3>
					
					</div>
					</TinderCard>
				))}
				
			</div>
		</div>
	);
}

export default TinderCards;
