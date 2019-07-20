import React from "react";

// Card Shown
function PlayingCard(props) {
  return (
      <div className="playing-card">
          <img src={props.image} alt={props.id}/>
      </div>
);
}

export default PlayingCard;