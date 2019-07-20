import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "./Container";
import PlayingCard from "./PlayingCard";
import data from "./../data.json";

class Game extends Component {
  state = {
    data,
    cardSeen: []
  };
  // Create Draw function
  // Preventing A Card being drawn twice (Changing seen: false boolean value to seen:true)

  resetData = data => {
    const resetData = data.map(card => ({ ...card, seen: false }));
    return this.shuffleData(resetData);
  };

  // Create Shuffle Cards function

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  // Handle onClick event
  handleClick = event => {
    event.preventDefault()
    console.log('clicked')
  }


  render() {
    return (
      <div>
        <Container>
          <div className="header">
            <h1>Playing Cards</h1>
          </div>
          {this.state.data.map(card => (
            <PlayingCard key={card.id} id={card.id} image={card.image} />
          ))}
          <Button onClick={this.handleClick} variant="danger">
            Draw
          </Button>
          <Button onClick={this.handleClick} variant="warning">
            Shuffle
          </Button>
        </Container>
      </div>
    );
  }
}

export default Game;
