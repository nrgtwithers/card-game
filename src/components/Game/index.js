import React, { Component } from "react";
import Nav from "../Nav";
import Button from "react-bootstrap/Button";
import Container from "../Container";
import PlayingCard from "../PlayingCard";
// import data from "../../";

class Game extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <h1>Playing Cards</h1>
            <PlayingCard />
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
        </Container>
      </div>
    );
  }
}

export default Game;
