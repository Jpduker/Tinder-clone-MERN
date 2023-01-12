import React, { useState } from 'react'
import "./TinderCards.css"

function TinderCards() {

    const[people , setPeople] =useState([
        {data : "Elon Musk"},
        {data: "Jeff Bezos"}

    ])
  return (
    <div className='TinderCards'>
      div.tinderCards__cardContainer
    </div>
  )
}

export default TinderCards