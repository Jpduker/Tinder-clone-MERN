import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
	const [people, setPeople] = useState([
		{
			name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/816px-Elon_Musk_2015.jpg",
		},
		{ 
      name: "Jeff Bezos" ,
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jeff_Bezos%27_iconic_laugh_%28cropped%29.jpg",

    },
	]);

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
					<div style={{backgroundImage: ` url( ${person.url})` }} className="card">
					<h3>{person.name}</h3>
					
					</div>
					</TinderCard>
				))}
				
			</div>
		</div>
	);
}

export default TinderCards;
