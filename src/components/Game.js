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

  componentDidMount() {
    this.setState({
      cardSeen: this.drawCard(this.state.data)
    });
  }

  // Create Draw function
  drawCard = data => {
    console.log(data);

    for (var i = 0; i < data.length; i++) {
      var obj = data[i];
      console.log(obj);
    }
  };

  // Preventing A Card being drawn twice (Changing seen: false boolean value to seen:true)

  // Create Shuffle Cards function

  shuffleData = data => {
    let i = data.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
    return data;
  };

  // Handle onClick events

  // To Shuffle
  handleShuffle = event => {
    event.preventDefault();
    this.setState({ data: this.shuffleData(this.state.data) });
  };

  //To Draw
  handleDraw = event => {
    event.preventDefault();
    console.log(data);
    // this.setState({ data: this.drawCard(this.state.data) });
  };

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
          <Button onClick={this.handleDraw} variant="danger">
            Draw
          </Button>
          <Button onClick={this.handleShuffle} variant="warning">
            Shuffle
          </Button>
        </Container>
      </div>
    );
  }
}

export default Game;
