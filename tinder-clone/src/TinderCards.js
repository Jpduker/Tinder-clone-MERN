import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
	const [people, setPeople] = useState([
		{
			data: "Elon Musk",
      url: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik"
		},
		{ 
      data: "Jeff Bezos" ,
      url: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQcKtPg4LQ1A7_j_7_ph7FfTTTjQrnqOdC2EPUHdeqAZ01JOImw19i9gvYHROXo0HahI13E_dZ1ZekfGEE"

    },
	]);

  const swipped = (direction,nameToDelete) =>{
    console.log("removing"+ nameToDelete)
  }
  const outofFrame = (data) => {
    console.log(data + " left the screen")
  };

	return (
		<div className="tinderCards">
			<div className="tinderCards__cardsContainer">
				{people.map((person) => (
					<TinderCard
						className="swipe"
						key={person.data}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swipped(dir, person.data)}
						onCardLeftScreen={() => outofFrame(person.data)}
					> 

					<div style={{backgroundImage: `url(${person.url})` }} className="card">
						<h3>{person.data}</h3>
					</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default TinderCards;
