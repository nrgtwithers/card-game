import React from "react";
import "./style.css";

// Card Shown
function PlayingCard(props) {
  return (
      <div>
          <img src={props.image} alt={props.id}/>
      </div>
);
}

export default PlayingCard;