import React, { Component } from "react";
import Nav from "../Nav";
import Button from "react-bootstrap/Button";
import Container from "../Container";
import PlayingCard from "../PlayingCard";
import data from "../../data.json";


class Game extends Component {
    state = {
        data
    }
// Create Draw function
// Preventing A Card being drawn twice (Changing seen: false boolean value to seen:true)
// Create Shuffle Cards function
// Handle onClick event


  render() {
    return (
      <div>
        <Nav />
        <Container>
          <h1>Playing Cards</h1>
          {this.state.data.map(card => (
            <PlayingCard 
            key={card.id}
            id={card.id}
            image={card.image} />
          ))}
          <Button variant="danger">Draw</Button>
          <Button variant="warning">Shuffle</Button>
        </Container>
      </div>
    );
  }
}

export default Game;
