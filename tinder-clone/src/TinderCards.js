import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
	const [people, setPeople] = useState([
		{
			data: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1024px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
		},
		{ 
      data: "Jeff Bezos" ,
      url: "https://imageio.forbes.com/specials-images/imageserve/5f469ea85cc82fc8d6083f05/Amazon-Founder-and-CEO-Jeff-Bezos/960x0.jpg?format=jpg&width=960"

    },
	]);

  const swipped = (direction,nameToDelete) =>{
    console.log("removing"+ nameToDelete)
  }
  const outofFrame = (data) => {
    console.log(data + " left the screen")
  };

	return (
		<div className="TinderCards">
			<div className="tinderCards__cardsContainer">
				{people.map((person) => (
					<TinderCard
						className="swipe"
						key={person.data}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swipped(dir, person.data)}
						onCardLeftScreen={() => outofFrame(person.data)}
					> </TinderCard>
				))}
			</div>
		</div>
	);
}

export default TinderCards;
